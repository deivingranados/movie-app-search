export interface ResultSearch {
  title: string;
  release_date: string;
  poster_path: string;
}
export interface DetailMovie {
  poster_path: string;
  title: string;
  runtime: number;
  vote_average: number;
  overview: string;
  original_language: string;
}
export interface ResponseList {
  title: string;
  release_date: string;
  poster_path: string;
  total_pages: number;
  results: [];
}

export interface ResponseDetail {
  response: {
    poster_path: string;
    title: string;
    runtime: number;
    vote_average: number;
    overview: string;
    original_language: string;
  };
}

export interface Card {
  id: number;
}
