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

//MovieImage interface
  export interface MovieImage {
    file_path: string;
    aspect_ratio?: number; //some props are optional...
    height?: number;
    iso_639_1?: string;
    vote_average?: number;
    vote_count?: number;
    width?: number;
  }

  //Production Countries
  export interface MovieT extends BaseMovie {
    genres: {
      id: number;
      name: string;
    }[];
    production_countries: {
      iso_3166_1: string;
      name: string;
    }[];
  }
  
//live movie data
  export interface ListedMovie extends BaseMovie {
    genre_ids: number[];
  }
  export type FilterOption = "title" | "genre";