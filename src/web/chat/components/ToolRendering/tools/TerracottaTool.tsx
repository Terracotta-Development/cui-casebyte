import React, { useState } from 'react';
import { CornerDownRight, ExternalLink } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/web/chat/components/ui/collapsible';
import type {
  SearchCaseLawInput,
  SearchCaseLawResponse,
  GetCaseJudgementInput,
  GetCaseJudgementResponse,
  SearchOrdinanceInput,
  SearchOrdinanceResponse,
  GetOrdinanceTextInput,
  GetOrdinanceTextResponse,
  SearchPracticeDirectionsInput,
  SearchPracticeDirectionsResponse,
  GetPracticeDirectionContentInput,
  GetPracticeDirectionContentResponse,
} from '@/web/chat/types/search';

interface TerracottaToolProps {
  toolName: string;
  input: any;
  result: string;
}

export function TerracottaTool({ toolName, input, result }: TerracottaToolProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const parseResult = () => {
    try {
      return JSON.parse(result);
    } catch {
      return null;
    }
  };

  const parsedResult = parseResult();

  const renderSearchCaseLaw = (data: SearchCaseLawResponse) => (
    <div className="space-y-3">
      <div className="text-sm font-medium">
        Found {data.result_count} case{data.result_count !== 1 ? 's' : ''} for "{data.query}"
      </div>
      <div className="space-y-2">
        {data.results.map((case_result) => (
          <div key={case_result.id} className="bg-secondary rounded-lg p-3 border">
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1">
                <h4 className="font-medium text-sm">{case_result.case_name}</h4>
                <div className="text-xs text-muted-foreground mt-1">
                  <div>{case_result.neutral_citation}</div>
                  <div>{case_result.court} • {case_result.date}</div>
                </div>
              </div>
              <a 
                href={case_result.case_url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 flex-shrink-0"
              >
                <ExternalLink size={14} />
              </a>
            </div>
            {case_result.highlights.length > 0 && (
              <div className="mt-2 text-xs">
                <div className="text-muted-foreground mb-1">Highlights:</div>
                {case_result.highlights.map((highlight, idx) => (
                  <div key={idx} className="bg-yellow-100 dark:bg-yellow-900/30 p-1 rounded text-foreground" 
                       dangerouslySetInnerHTML={{ __html: highlight }} />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const renderCaseJudgement = (data: GetCaseJudgementResponse) => (
    <div className="space-y-3">
      <div className="border-b pb-3">
        <h4 className="font-medium">{data.case_name}</h4>
        <div className="text-sm text-muted-foreground">
          <div>{data.neutral_citation}</div>
          <div>{data.court} • {data.date}</div>
          <div className="mt-1">Length: {data.text_length.toLocaleString()} characters</div>
        </div>
      </div>
      <div className="bg-neutral-950 rounded-lg p-3 overflow-x-auto">
        <pre className="text-neutral-100 font-mono text-xs leading-relaxed whitespace-pre-wrap">
          {data.judgement_text}
        </pre>
      </div>
    </div>
  );

  const renderSearchOrdinances = (data: SearchOrdinanceResponse) => (
    <div className="space-y-3">
      <div className="text-sm font-medium">
        Found {data.result_count} ordinance{data.result_count !== 1 ? 's' : ''} for "{data.query}"
      </div>
      <div className="space-y-2">
        {data.results.map((ordinance) => (
          <div key={ordinance.id} className="bg-secondary rounded-lg p-3 border">
            <h4 className="font-medium text-sm">{ordinance.title}</h4>
            <div className="text-xs text-muted-foreground mt-1">
              <div>Chapter {ordinance.chapter_number}: {ordinance.chapter_title}</div>
              <div>Ingestion Date: {ordinance.ingestion_date}</div>
            </div>
            {ordinance.highlights.length > 0 && (
              <div className="mt-2 text-xs">
                <div className="text-muted-foreground mb-1">Highlights:</div>
                {ordinance.highlights.map((highlight, idx) => (
                  <div key={idx} className="bg-yellow-100 dark:bg-yellow-900/30 p-1 rounded text-foreground" 
                       dangerouslySetInnerHTML={{ __html: highlight }} />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const renderOrdinanceText = (data: GetOrdinanceTextResponse) => (
    <div className="space-y-3">
      <div className="border-b pb-3">
        <h4 className="font-medium">Chapter {data.chapter_number}: {data.chapter_title}</h4>
        <div className="text-sm text-muted-foreground">
          Length: {data.text_length.toLocaleString()} characters
        </div>
      </div>
      <div className="bg-neutral-950 rounded-lg p-3 overflow-x-auto">
        <pre className="text-neutral-100 font-mono text-xs leading-relaxed whitespace-pre-wrap">
          {data.ordinance_text}
        </pre>
      </div>
    </div>
  );

  const renderSearchPracticeDirections = (data: SearchPracticeDirectionsResponse) => (
    <div className="space-y-3">
      <div className="text-sm font-medium">
        Found {data.result_count} practice direction{data.result_count !== 1 ? 's' : ''} for "{data.query}"
      </div>
      <div className="space-y-2">
        {data.results.map((pd) => (
          <div key={pd.id} className="bg-secondary rounded-lg p-3 border">
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1">
                <h4 className="font-medium text-sm">{pd.pd_title}</h4>
                <div className="text-xs text-muted-foreground mt-1">
                  <div>PD No: {pd.pd_no} {pd.parent_pd_no && `(Parent: ${pd.parent_pd_no})`}</div>
                  <div>Category: {pd.category} {pd.is_appendix && '• Appendix'}</div>
                  <div>File Size: {(pd.file_size / 1024).toFixed(1)} KB</div>
                </div>
              </div>
              <a 
                href={pd.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 flex-shrink-0"
              >
                <ExternalLink size={14} />
              </a>
            </div>
            {pd.highlights.length > 0 && (
              <div className="mt-2 text-xs">
                <div className="text-muted-foreground mb-1">Highlights:</div>
                {pd.highlights.map((highlight, idx) => (
                  <div key={idx} className="bg-yellow-100 dark:bg-yellow-900/30 p-1 rounded text-foreground" 
                       dangerouslySetInnerHTML={{ __html: highlight }} />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const renderPracticeDirectionContent = (data: GetPracticeDirectionContentResponse) => (
    <div className="space-y-3">
      <div className="border-b pb-3">
        <h4 className="font-medium">{data.pd_title}</h4>
        <div className="text-sm text-muted-foreground">
          <div>PD No: {data.pd_no} {data.parent_pd_no && `(Parent: ${data.parent_pd_no})`}</div>
          <div>Category: {data.category} {data.is_appendix && '• Appendix'}</div>
          <div>File Size: {(data.file_size / 1024).toFixed(1)} KB • Length: {data.content_length.toLocaleString()} characters</div>
        </div>
      </div>
      <div className="bg-neutral-950 rounded-lg p-3 overflow-x-auto">
        <pre className="text-neutral-100 font-mono text-xs leading-relaxed whitespace-pre-wrap">
          {data.content}
        </pre>
      </div>
    </div>
  );

  const renderFormattedResult = () => {
    if (!parsedResult) {
      return (
        <div className="bg-neutral-950 rounded-xl overflow-hidden">
          <pre className="m-0 p-3 text-neutral-100 font-mono text-xs leading-relaxed whitespace-pre-wrap break-words">
            {result || 'No result'}
          </pre>
        </div>
      );
    }

    switch (toolName) {
      case 'mcp__terracotta-law__search_case_law':
        return renderSearchCaseLaw(parsedResult as SearchCaseLawResponse);
      
      case 'mcp__terracotta-law__get_case_judgement':
        return renderCaseJudgement(parsedResult as GetCaseJudgementResponse);
      
      case 'mcp__terracotta-law__search_ordinances':
        return renderSearchOrdinances(parsedResult as SearchOrdinanceResponse);
      
      case 'mcp__terracotta-law__get_ordinance_text':
        return renderOrdinanceText(parsedResult as GetOrdinanceTextResponse);
      
      case 'mcp__terracotta-law__search_practice_directions':
        return renderSearchPracticeDirections(parsedResult as SearchPracticeDirectionsResponse);
      
      case 'mcp__terracotta-law__get_practice_direction_content':
        return renderPracticeDirectionContent(parsedResult as GetPracticeDirectionContentResponse);
      
      default:
        return (
          <div className="bg-neutral-950 rounded-xl overflow-hidden">
            <pre className="m-0 p-3 text-neutral-100 font-mono text-xs leading-relaxed whitespace-pre-wrap break-words">
              {JSON.stringify(parsedResult, null, 2)}
            </pre>
          </div>
        );
    }
  };


  const parseInput = () => {
    try {
      // Check if input is a string before parsing
      if (typeof input === 'string') {
        return JSON.parse(input); // Parse if it's a string
      } else {
        return input; // Already an object, return as-is
      }
    } catch (err) {
      return null;
    }
  };

  const parsedInput = parseInput();

  const renderInputSearchCaseLaw = (data: SearchCaseLawInput) => (
    <div className="bg-blue-50 dark:bg-blue-950/20 rounded-xl p-3 border border-blue-200 dark:border-blue-800/30">
      <div className="text-sm font-medium text-blue-800 dark:text-blue-200 mb-2">Search Parameters</div>
      <div className="space-y-1 text-xs">
        <div><span className="font-medium">Query:</span> <code className="bg-blue-100 dark:bg-blue-900/50 px-1 rounded">{data["query"]}</code></div>
        {data.size && <div><span className="font-medium">Results:</span> {data.size}</div>}
        {data.year_from && <div><span className="font-medium">From Year:</span> {data.year_from}</div>}
        {data.year_to && <div><span className="font-medium">To Year:</span> {data.year_to}</div>}
        {data.sort_by_date && <div><span className="font-medium">Sort:</span> {data.sort_by_date}</div>}
        {data.courts && (
          <div>
            <span className="font-medium">Courts:</span> {
              Array.isArray(data.courts) 
                ? data.courts.join(', ')
                : data.courts
            }
          </div>
        )}
      </div>
    </div>
  );

  const renderInputCaseJudgement = (data: GetCaseJudgementInput) => (
    <div className="bg-green-50 dark:bg-green-950/20 rounded-xl p-3 border border-green-200 dark:border-green-800/30">
      <div className="text-sm font-medium text-green-800 dark:text-green-200 mb-2">Retrieval Parameters</div>
      <div className="space-y-1 text-xs">
        <div><span className="font-medium">Case ID:</span> <code className="bg-green-100 dark:bg-green-900/50 px-1 rounded">{data.case_id}</code></div>
        {data.max_chars && <div><span className="font-medium">Max Characters:</span> {data.max_chars.toLocaleString()}</div>}
      </div>
    </div>
  );

  const renderInputSearchOrdinances = (data: SearchOrdinanceInput) => (
    <div className="bg-purple-50 dark:bg-purple-950/20 rounded-xl p-3 border border-purple-200 dark:border-purple-800/30">
      <div className="text-sm font-medium text-purple-800 dark:text-purple-200 mb-2">Search Parameters</div>
      <div className="space-y-1 text-xs">
        <div><span className="font-medium">Query:</span> <code className="bg-purple-100 dark:bg-purple-900/50 px-1 rounded">{data.query}</code></div>
        {data.size && <div><span className="font-medium">Results:</span> {data.size}</div>}
      </div>
    </div>
  );

  const renderInputOrdinanceText = (data: GetOrdinanceTextInput) => (
    <div className="bg-orange-50 dark:bg-orange-950/20 rounded-xl p-3 border border-orange-200 dark:border-orange-800/30">
      <div className="text-sm font-medium text-orange-800 dark:text-orange-200 mb-2">Retrieval Parameters</div>
      <div className="space-y-1 text-xs">
        <div><span className="font-medium">Ordinance ID:</span> <code className="bg-orange-100 dark:bg-orange-900/50 px-1 rounded">{data.ordinance_id}</code></div>
        {data.max_chars && <div><span className="font-medium">Max Characters:</span> {data.max_chars.toLocaleString()}</div>}
      </div>
    </div>
  );

  const renderInputSearchPracticeDirections = (data: SearchPracticeDirectionsInput) => (
    <div className="bg-cyan-50 dark:bg-cyan-950/20 rounded-xl p-3 border border-cyan-200 dark:border-cyan-800/30">
      <div className="text-sm font-medium text-cyan-800 dark:text-cyan-200 mb-2">Search Parameters</div>
      <div className="space-y-1 text-xs">
        <div><span className="font-medium">Query:</span> <code className="bg-cyan-100 dark:bg-cyan-900/50 px-1 rounded">{data.query}</code></div>
        {data.size && <div><span className="font-medium">Results:</span> {data.size}</div>}
      </div>
    </div>
  );

  const renderInputPracticeDirectionContent = (data: GetPracticeDirectionContentInput) => (
    <div className="bg-indigo-50 dark:bg-indigo-950/20 rounded-xl p-3 border border-indigo-200 dark:border-indigo-800/30">
      <div className="text-sm font-medium text-indigo-800 dark:text-indigo-200 mb-2">Retrieval Parameters</div>
      <div className="space-y-1 text-xs">
        <div><span className="font-medium">Practice Direction ID:</span> <code className="bg-indigo-100 dark:bg-indigo-900/50 px-1 rounded">{data.pd_id}</code></div>
        {data.max_chars && <div><span className="font-medium">Max Characters:</span> {data.max_chars.toLocaleString()}</div>}
      </div>
    </div>
  );

  const renderFormattedInput = () => {
    if (!parsedInput) {
      return (
        <div className="bg-neutral-950 rounded-xl overflow-hidden">
          <pre className="m-0 p-3 text-neutral-100 font-mono text-xs leading-relaxed whitespace-pre-wrap break-words">
            {JSON.stringify(input, null, 2) || 'No input'}
          </pre>
        </div>
      );
    }

    switch (toolName) {
      case 'mcp__terracotta-law__search_case_law':
        return renderInputSearchCaseLaw(parsedInput as SearchCaseLawInput);
      
      case 'mcp__terracotta-law__get_case_judgement':
        return renderInputCaseJudgement(parsedInput as GetCaseJudgementInput);
      
      case 'mcp__terracotta-law__search_ordinances':
        return renderInputSearchOrdinances(parsedInput as SearchOrdinanceInput);
      
      case 'mcp__terracotta-law__get_ordinance_text':
        return renderInputOrdinanceText(parsedInput as GetOrdinanceTextInput);
      
      case 'mcp__terracotta-law__search_practice_directions':
        return renderInputSearchPracticeDirections(parsedInput as SearchPracticeDirectionsInput);
      
      case 'mcp__terracotta-law__get_practice_direction_content':
        return renderInputPracticeDirectionContent(parsedInput as GetPracticeDirectionContentInput);
      
      default:
        return (
          <div className="bg-neutral-950 rounded-xl overflow-hidden">
            <pre className="m-0 p-3 text-neutral-100 font-mono text-xs leading-relaxed whitespace-pre-wrap break-words">
              {JSON.stringify(parsedInput, null, 2)}
            </pre>
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col gap-1 -mt-0.5">
      <Collapsible open={isExpanded} onOpenChange={setIsExpanded}>
        <CollapsibleTrigger asChild>
          <div 
            className="text-sm text-muted-foreground cursor-pointer select-none hover:text-foreground flex items-center gap-1"
            aria-label={`Toggle ${toolName} details`}
          >
            <CornerDownRight 
              size={12} 
              className={`transition-transform ${isExpanded ? 'rotate-90' : ''}`} 
            />
            Expand results
          </div>
        </CollapsibleTrigger>
        
        <CollapsibleContent className="space-y-1">
          {result && renderFormattedResult()}
          
          {/* Always show input in expanded state for debugging */}
          {input && renderFormattedInput()}
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}