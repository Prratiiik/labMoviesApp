import React, { FC } from "react";
import { PopularMovies, ListedMovie } from "../types/interface";
import MovieListPageTemplate from "../components/templateMovieListPage";
import { getPopularMovies } from "../api/tmdb-api";
import AddToFavoritesIcon from "../components/cardIcons/addToFavourites";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";

const PopularMoviesPage: FC = () => {
  const { data, error, isLoading, isError } = useQuery<PopularMovies, Error>(
    "Popular movies",
    getPopularMovies
  );
  const movies = data ? data.results : [];

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <MovieListPageTemplate
      title="Popular Movies"
      movies={movies}
      action={(movie: ListedMovie) => {
        return <AddToFavoritesIcon {...movie} />;
      }}
    />
  );
};
export default PopularMoviesPage;
