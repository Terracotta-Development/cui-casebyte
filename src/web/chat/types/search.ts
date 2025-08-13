
export enum SortByDate {
	OLDEST = "oldest",
	NEWEST = "newest",
}

export interface SearchCaseLawInput {
  query: string; // boolean query string
  size?: number;
	year_from?: number;
	year_to?: number;
	sort_by_date?: SortByDate;
	courts?: string | string[];
}

export interface SearchCaseLawResponse {
	query: string;
	result_count: number;
	results: SearchCaseLawResult[];
}

export interface SearchCaseLawResult {
	rank: number;
	id: string;
	case_name: string;
	court: string;
	date: string;
	neutral_citation: string;
	case_url: string;
	highlights: string[];
}

export interface GetCaseJudgementInput {
	case_id: string;
	max_chars?: number;
}

export interface GetCaseJudgementResponse {
	case_id: string;
	case_name: string;
	court: string;
	date: string;
	neutral_citation: string;
	case_url: string;
	judgement_text: string;
	text_length: number;
}

export interface SearchOrdinanceInput {
	query: string;
	size?: number;
}

export interface SearchOrdinanceResponse {
	query: string;
	result_count: number;
	results: SearchOrdinanceResult[];
}

export interface SearchOrdinanceResult {
	rank: number;
	id: string;
	title: string;
	chapter_number: string;
	chapter_title: string;
	english_rtf: string;
	chinese_rtf: string;
	ingestion_date: string;
	highlights: string[];
}

export interface GetOrdinanceTextInput {
	ordinance_id: string;
	max_chars?: number;
}

export interface GetOrdinanceTextResponse {
	ordinance_id: string;
	chapter_number: string;
	chapter_title: string;
	ordinance_text: string;
	text_length: number;
}

export interface SearchPracticeDirectionsInput {
	query: string;
	size?: number;
}

export interface SearchPracticeDirectionsResponse {
	query: string;
	result_count: number;
	results: SearchPracticeDirectionsResult[];
}

export interface SearchPracticeDirectionsResult {
	rank: number;
	id: string;
	pd_no: string;
	pd_title: string;
	parent_pd_no: string;
	category: number; 
	is_appendix: boolean,
	url: string;
	file_size: number;
	ingestion_date: string;
	highlights: string[];
}

export interface GetPracticeDirectionContentInput {
	pd_id: string;
	max_chars?: number;
}

export interface GetPracticeDirectionsResponse {
	pd_id: string;
	pd_no: string;
	pd_title: string;
	parent_pd_no: string;
	category: number; 
	is_appendix: boolean,
	url: string;
	file_size: number;
	ingestion_date: string;
	content: string;
	content_length: number;
}