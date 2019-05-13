declare module 'damerau-levenshtein' {
  export default function lev(arg1: string, arg2: string, arg3?: number): LevenshteinResponse;
}

interface LevenshteinResponse {
  steps: number;
  relative: number;
  similarity: number;
}
