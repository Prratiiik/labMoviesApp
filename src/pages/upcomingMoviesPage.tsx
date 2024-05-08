import React, {FC, useContext} from "react";
import { UpcomingMovies, ListedMovie } from "../types/interface";
import MovieListPageTemplate from "../components/templateMovieListPage";
import { getUpcomingMovies } from "../api/tmdb-api";
// import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";
import AddToPlaylist from "../components/cardIcons/addToPlaylist";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { MoviesContext } from "../contexts/moviesContext";

  const UpcomingMoviesPage: FC= () => {
    const { pageMovies, setPageMovies } = useContext(MoviesContext);
    const {data, error, isLoading, isError} = useQuery<UpcomingMovies, Error>("Upcoming movies", () => getUpcomingMovies(pageMovies));
    const movies = data ? data.results :[] ;

    if (isLoading) {
        return <Spinner />;
    }
    
    if (isError) {
        return <h1>{error.message}</h1>;
    }
        
        return (
          <MovieListPageTemplate
                title='Upcoming Movies'
                movies={movies}
                action={(movie: ListedMovie) => {
                    return <AddToPlaylist {...movie} />;
                } } page={pageMovies} pageSetter={setPageMovies}        />
      );
    };
    export default UpcomingMoviesPage;