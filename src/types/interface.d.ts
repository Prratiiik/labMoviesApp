export interface BaseMovie {
    title: string;
    budget: number;
    homepage: string | undefined;
    id: number;
    imdb_id: string;
    original_language: string;
    overview: string;
    release_date: string;
    vote_average: number;
    popularity: number;
    poster_path?: string;
    tagline: string;
    runtime: number;
    revenue: number;
    vote_count: number;
    favourite?: boolean;
  }

  //Assembling the Home page.
  export interface BaseMovieList { 
    movies: BaseMovie[];
  }   

  //Extend the Base Movie interface
  export interface MovieT extends BaseMovie {
    genres: {
      id: number;
      name: string;
    }[];
  }