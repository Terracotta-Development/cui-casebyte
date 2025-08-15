import { ConversationConfig } from '@/types/index.js';

/**
 * Security configuration for production deployment
 * Restricts Claude Code to only use legal research MCP tools
 */

// Law MCP tools that are allowed for legal research
const ALLOWED_LAW_TOOLS = [
  'mcp__terracotta-law__search_case_law',
  'mcp__terracotta-law__search_ordinances', 
  'mcp__terracotta-law__get_case_judgement',
  'mcp__terracotta-law__get_ordinance_text',
  'mcp__terracotta-law__search_practice_directions',
  'mcp__terracotta-law__get_practice_direction_content'
];

// Essential planning tools that should remain available
const ALLOWED_PLANNING_TOOLS = [
  'TodoWrite'  // Keep planning capabilities for better task management
];

// All other Claude Code tools that should be disabled in production
const DISALLOWED_TOOLS = [
  // Network access tools
  'WebFetch',
  'WebSearch',
  
  // File system tools
  'Read',
  'Write', 
  'Edit',
  'MultiEdit',
  'Glob',
  'LS',
  
  // System execution tools
  'Bash',
  'Task',
  
  // Notebook tools
  'NotebookEdit',
  
  // Development tools (keep TodoWrite for planning)
  'ExitPlanMode',
  
  // Search tools
  'Grep',
  
  // Other MCP tools (non-law)
  'mcp__ide__getDiagnostics',
  'mcp__ide__executeCode',
  'ListMcpResourcesTool',
  'ReadMcpResourceTool',
  'BashOutput',
  'KillBash'
];

/**
 * Creates a production-ready Claude Code configuration 
 * that only allows law MCP tools for legal research
 */
export function createProductionSecurityConfig(baseConfig: Partial<ConversationConfig>): ConversationConfig {
  return {
    ...baseConfig,
    workingDirectory: baseConfig.workingDirectory || process.cwd(),
    initialPrompt: baseConfig.initialPrompt || '',
    allowedTools: [...ALLOWED_LAW_TOOLS, ...ALLOWED_PLANNING_TOOLS],
    disallowedTools: DISALLOWED_TOOLS,
    permissionMode: 'strict',
    systemPrompt: `You are a legal research assistant specialized in Hong Kong law. 

IMPORTANT SECURITY RESTRICTIONS:
- You can ONLY use the provided law MCP tools to search Hong Kong case law, ordinances, and practice directions
- You CANNOT access external websites, file systems, or execute system commands  
- You CANNOT read, write, or modify any files
- Focus exclusively on legal research

Your available tools are limited to:
${[...ALLOWED_LAW_TOOLS, ...ALLOWED_PLANNING_TOOLS].map(tool => `- ${tool}`).join('\n')}

Provide accurate legal research assistance within these security constraints.`
  };
}

/**
 * Environment variable restrictions for security
 * Removes network proxy settings and other potentially dangerous env vars
 */
export function getRestrictedEnvironment(baseEnv: NodeJS.ProcessEnv): NodeJS.ProcessEnv {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    // Remove proxy settings to prevent network bypass
    HTTP_PROXY,
    HTTPS_PROXY,
    FTP_PROXY,
    SOCKS_PROXY,
    // Remove debugging vars that could expose internals
    NODE_OPTIONS,
    VSCODE_INSPECTOR_OPTIONS,
    // Remove other potentially sensitive vars
    AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY,
    GOOGLE_APPLICATION_CREDENTIALS,
    ...cleanEnv
  } = baseEnv;

  return {
    ...cleanEnv,
    // Ensure localhost-only network access
    NO_PROXY: 'localhost,127.0.0.1',
    // Disable Node debugging
    NODE_ENV: 'production'
  };
}

/**
 * Validates that a configuration meets security requirements
 */
export function validateSecurityConfig(config: ConversationConfig): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  // Check that only allowed tools are present
  if (config.allowedTools) {
    const allAllowedTools = [...ALLOWED_LAW_TOOLS, ...ALLOWED_PLANNING_TOOLS];
    const unauthorizedTools = config.allowedTools.filter(tool => !allAllowedTools.includes(tool));
    if (unauthorizedTools.length > 0) {
      errors.push(`Unauthorized tools in allowedTools: ${unauthorizedTools.join(', ')}`);
    }
  }

  // Check that dangerous tools are properly disallowed
  const missingDisallowedTools = DISALLOWED_TOOLS.filter(tool => 
    !config.disallowedTools?.includes(tool)
  );
  if (missingDisallowedTools.length > 0) {
    errors.push(`Missing disallowed tools: ${missingDisallowedTools.join(', ')}`);
  }

  // Check permission mode
  if (config.permissionMode !== 'strict') {
    errors.push('Permission mode must be "strict" for production security');
  }

  // Check system prompt contains security restrictions
  if (!config.systemPrompt?.includes('IMPORTANT SECURITY RESTRICTIONS')) {
    errors.push('System prompt must contain security restrictions');
  }

  return {
    valid: errors.length === 0,
    errors
  };
}