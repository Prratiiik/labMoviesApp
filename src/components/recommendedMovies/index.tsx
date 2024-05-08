import React from "react";
import { useQuery } from "react-query";
import MovieCard from "../movieCard";
import Spinner from "../spinner";
import AddToFavouritesIcon from "../cardIcons/addToFavourites";
import { getRecommendedMovies } from "../../api/tmdb-api";

 const styles = {
   container: {
     overflowX: "scroll",
     display: "flex",
     flexDirection: "row",
   },
   card: {
     marginLeft: "20px",
     minWidth: "275px",
   },
 };
// const container = {
//     overflowX: "scroll",
//     display: "flex",
//     flexDirection: "row",
// };

interface RecommendedMoviesProps {
    movie: any;
    
  }

const RecommendedMovies: React.FC<any> = ({movie}: any) => {
    const { isLoading, isError, error, data } = useQuery(
        ["recommended movies", movie],
        () => getRecommendedMovies(movie.id)
    );

    if (isLoading) {
        return <Spinner />;
    }

    if (isError) {
        return <h1>
            {/* {error.message} */}error
        </h1>;
    }

    const styles = {
        color: 'red',
        Padding: 20
    }
    const card = {
        marginLeft: "20px",
        minWidth: "275px",
    };

    return (
        <div style={styles}>
            {data.map((m: any) => (
                <div key={m.id} style={card}>
                    <MovieCard
                        movie={m}
                        action={(movie:any) => {
                            return <AddToFavouritesIcon movie ={movie} />;
                        }}
                    />
                </div>
            ))}
        </div>
    );
};

export default RecommendedMovies;