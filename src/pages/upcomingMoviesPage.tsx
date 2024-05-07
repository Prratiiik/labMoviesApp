import React, {FC} from "react";
import { UpcomingMovies } from "../types/interface";
import MovieListPageTemplate from "../components/templateMovieListPage";
import { getUpcomingMovies } from "../api/tmdb-api";
// import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";
import AddToPlaylist from "../components/cardIcons/addToPlaylist";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";

  const UpcomingMoviesPage: FC= () => {
    const {data, error, isLoading, isError} = useQuery<UpcomingMovies, Error>("Upcoming movies", getUpcomingMovies);
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
        //   action={(movie: ListedMovie) => {
        //     return <AddToFavouritesIcon {...movie} />
            action={() => {
                return <AddToPlaylist/>
            }
          }
        />
      );
    };
    export default UpcomingMoviesPage;