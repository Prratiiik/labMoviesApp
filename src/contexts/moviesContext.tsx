import React, { useState } from "react";
import { ListedMovie, MovieT, Review } from "../types/interface";

interface MovieContextInterface {
    favourites: number[];
    mustWatch: number[];
    addToFavourites: ((movie: ListedMovie) => void);
    addTomustWatch: ((movie: ListedMovie) => void);
    removeFromFavourites: ((movie: ListedMovie) => void);
    addReview: ((movie: MovieT, review: Review) => void);  // NEW
    pageMovies: any;
    setPageMovies : any;
    pageUpcomingMovies: any;
    setPageUpcomingMovies: any;
}

// const initialContextState: MovieContextInterface = {
//     favourites: [],
//     mustWatch: [],
//     addToFavourites: (movie) => {movie.id },
//     addTomustWatch: (movie) => {movie.id },
//     removeFromFavourites: (movie: ListedMovie) => { movie.id},
//     addReview: (movie, review) => { movie.id, review},  // NEW
//     pageMovies: 1,
//     setPageMovies : (num) => {num},
//     pageUpcomingMovies: page,
//     setPageUpcomingMovies: 1,
// };

export const MoviesContext = React.createContext<any>(null);;

const MoviesContextProvider: React.FC<React.PropsWithChildren> = (props) => {
    const [myReviews, setMyReviews] = useState<Review[]>( [] )  // NEW
    const [favourites, setFavourites] = useState<number[]>([]);
    const [mustWatch, setmustWatch] = useState<number[]>([]);
    const [pageMovies, setPageMovies] = useState(1);
    const [pageUpcomingMovies, setPageUpcomingMovies] = useState(1);

    const addToFavourites = (movie: ListedMovie) => {
        let updatedFavourites = [...favourites];
        if (!favourites.includes(movie.id)) {
            updatedFavourites.push(movie.id);
        }
        setFavourites(updatedFavourites);
    };
    
    const addTomustWatch= (movie: ListedMovie) => {
        let updatedmustWatch = [...mustWatch];
        if (!mustWatch.includes(movie.id)) {
            updatedmustWatch.push(movie.id);
        }
        setmustWatch(updatedmustWatch);
        console.log("added to must watch")
        console.log(mustWatch)
    };
    // We will use this function in a later section
    const removeFromFavourites = (movie: ListedMovie) => {
        setFavourites(favourites.filter((mId) => mId !== movie.id));
    };
    const addReview = (movie: MovieT, review: Review) => {   // NEW
        setMyReviews( {...myReviews, [movie.id]: review } )
      };


    return (
        <MoviesContext.Provider
            value={{
                favourites,
                addToFavourites,
                removeFromFavourites,
                addReview,    // NEW
                mustWatch,
                addTomustWatch,
                pageMovies,
                setPageMovies,
                pageUpcomingMovies,
                setPageUpcomingMovies,
            }}
        >
            {props.children}
        </MoviesContext.Provider>
    );
};

export default MoviesContextProvider;