declare module 'damerau-levenshtein' {
  export default function lev(firstString: string, secondString: string, limit?: number): LevenshteinResponse;
}

interface LevenshteinResponse {
  steps: number;
  relative: number;
  similarity: number;
}
