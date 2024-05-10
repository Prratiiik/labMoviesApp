import React from "react";
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

  export interface BaseSeries {
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
    production_countries: {
      name: string;
    }[];
    // cast: {
    //   id: number;
    //   name: string;
    // }[];
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
    // cast: {
    //   iso_3166_1: string;
    //   name: string;
    // }
  }
  
//live movie data
  export interface ListedMovie extends BaseMovie {
    genre_ids: number[];
  }

  export interface ListedTVSeries extends BaseSeries {
    genre_ids: number[];
  }
  export type FilterOption = "title" | "genre";

  export interface MovieListPageTemplateProps {
    movies: ListedMovie[];
    title: string;
    action: (m: ListedMovie) => React.ReactNode;
  }

  export interface SeriesListPageTemplateProps {
    shows: ListedTVSeries[];
    title: string;
    // currentpage: number;
    // totalpage: number;
    // onPrevPage: () => void;
    // onNextPage: () => void;
    actionSeries: (m: ListedTVSeries) => React.ReactNode;
  }

  export interface BaseTVSeries {
    backdrop_path: string | null;
    first_air_date: string;
    genre_ids?: number[];
    id: number;
    name: string;
    origin_country: string[];
    original_languages: string
    original_name:string;
    overview:string;
    popularity: number;
    poster_path?: string | null;
    vote_average: number;
    vote_count: number;
    favourite?: boolean;
  }
  export interface Review{
    id: string;
    content: string,
    author: string,
    agree: boolean,
    rating: number,
    movieId: number,
  }

//CircularIndeterminate
  export interface GenreData {
    genres: {
      id: string;
      name: string
    }[];
  }

  interface DiscoverMovies {
    page: number;	
    total_pages: number;
    total_results: number;
    results: BaseMovie[];
  }

  interface UpcomingMovies {
    page: number;
    total_pages: number;
    total_results: number;
    results: ListedMovie[];
  }

  interface DiscoverTVSeries {
    page: number;	
    total_pages: number;
    total_results: number;
    results: ListedTVSeries[];
  }