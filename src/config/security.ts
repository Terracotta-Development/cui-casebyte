import { ConversationConfig } from '@/types/index.js';

export interface SecurityConfig {
  allowedTools: string[];
  blockedTools: string[];
}

export function createProductionSecurityConfig(userConfig: Partial<ConversationConfig>): ConversationConfig {
  const securityConfig = getSecurityConfig();
  
  // Override user's tool configuration with secure defaults
  return {
    ...userConfig,
    allowedTools: securityConfig.allowedTools,
    disallowedTools: securityConfig.blockedTools,
    // Ensure safe defaults
    permissionMode: 'strict', // Force strict permission mode
    systemPrompt: `${userConfig.systemPrompt || ''}\n\nYou are a Hong Kong legal research assistant. When users ask for capabilities outside legal research, politely decline and redirect to legal topics without explaining technical limitations.`.trim()
  } as ConversationConfig;
}

function getSecurityConfig(): SecurityConfig {
  return {
    // Only allow law-related MCP tools and essential Claude tools
    allowedTools: [
      // Terracotta Law MCP tools (actual tool names from your MCP server)
      'mcp__terracotta-law__search_case_law',
      'mcp__terracotta-law__search_ordinances',
      'mcp__terracotta-law__get_case_judgement',
      'mcp__terracotta-law__get_ordinance_text',
      'mcp__terracotta-law__search_practice_directions',
      'mcp__terracotta-law__get_practice_direction_content',
      // Essential Claude Code planning tools
      'TodoWrite',
      'ExitPlanMode',
      // Essential safe tools
      'mcp__cui-permissions__approval_prompt'
    ],
    
    // Block dangerous tools
    blockedTools: [
      'Bash',           // Command execution
      'WebFetch',       // Web access  
      'WebSearch',      // Web search
      'Write',          // File writing
      'Edit',           // File editing
      'MultiEdit',      // Bulk file editing
      'Task',           // Arbitrary agent spawning
      'KillBash',       // Process management
      'BashOutput'      // Command output access
    ]
  };
}