import React from "react";
import { useState, useEffect, FC } from "react";  
import { ListedMovie } from "../types/interface";
import MovieListPageTemplate from "../components/templateMovieListPage";
import { getMovies, getUpcomingMovies } from "../api/tmdb-api";

 
const UpcomingMoviePage: FC= () => {
  const [movies, setMovies] = useState<ListedMovie[]>([]);
  const favourites = movies.filter(m => m.favourite)
  localStorage.setItem('favourites', JSON.stringify(favourites))
  // New function
const addToFavourites = (movieId: number) => {
  const updatedMovies = movies.map((m: ListedMovie) =>
    m.id === movieId ? { ...m, favourite: true } : m
  );
  setMovies(updatedMovies);
};

useEffect(() => {
  getUpcomingMovies().then(movies => {
    setMovies(movies);
  });
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);
  
  return (
    <MovieListPageTemplate
    title='Upcoming Movies'
    movies={movies}
    selectFavourite={addToFavourites}
  />
);
};
export default UpcomingMoviePage;