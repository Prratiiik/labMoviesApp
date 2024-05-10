import React, { useState } from "react";
import { ListedTVSeries, ListedMovie, MovieT, Review, ListedActors } from "../types/interface";

interface MovieContextInterface {
    favourites: number[];
    mustWatch: number[];
    favouriteShows: number[];
    favouriteActors: number[];
    addToFavourites: ((movie: ListedMovie) => void);
    addTomustWatch: ((movie: ListedMovie) => void);
    removeFromFavourites: ((movie: ListedMovie) => void);
    addReview: ((movie: MovieT, review: Review) => void);  // NEW
    addToFavouriteShows: (show: ListedTVSeries) => void;
    removeFromFavouriteShows: (show: ListedTVSeries) => void;
    addToFavouriteActors: (actors: ListedActors) => void;
    removeFromFavouriteActors: (actors: ListedActors) => void;
}

const initialContextState: MovieContextInterface = {
    favourites: [],
    mustWatch: [],
    favouriteShows: [],
    favouriteActors: [],
    addToFavourites: (movie) => {movie.id },
    addTomustWatch: (movie) => {movie.id },
    removeFromFavourites: (movie) => { movie.id},
    addReview: (movie, review) => { movie.id, review},  // NEW
    addToFavouriteShows: (show) => {show.id },
    removeFromFavouriteShows: (show) => { show.id},
    addToFavouriteActors: (actors) => { actors.id},
    removeFromFavouriteActors: (actors) => { actors.id},
};

export const MoviesContext =
  React.createContext<MovieContextInterface>(initialContextState);
  

const MoviesContextProvider: React.FC<React.PropsWithChildren> = (props) => {
    const [myReviews, setMyReviews] = useState<Review[]>( [] )  // NEW
    const [favourites, setFavourites] = useState<number[]>([]);
    const [favouriteShows, setFavouriteShows] = useState<number[]>([]);
    const [favouriteActors, setFavouriteActors] = useState<number[]>([]);
    const [mustWatch, setmustWatch] = useState<number[]>([]);

    const addToFavourites = (movie: ListedMovie) => {
        let updatedFavourites = [...favourites];
        if (!favourites.includes(movie.id)) {
            updatedFavourites.push(movie.id);
        }
        setFavourites(updatedFavourites);
    };

    const addToFavouriteShows = (show: ListedTVSeries) => {
        let updatedFavourites = [...favouriteShows];
        if (!favourites.includes(show.id)) {
            updatedFavourites.push(show.id);
        }
        setFavouriteShows(updatedFavourites);
    };

    const addToFavouriteActors = (actors: ListedActors) => {
        let updatedFavourites = [...favouriteActors];
        if (!favourites.includes(actors.id)) {
            updatedFavourites.push(actors.id);
        }
        setFavouriteActors(updatedFavourites);
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
    const removeFromFavouriteShows = (show: ListedTVSeries) => {
        setFavouriteShows(favouriteShows.filter((mId) => mId !== show.id));
    };
    const removeFromFavouriteActors = (actor: ListedActors) => {
        setFavouriteActors(favouriteActors.filter((mId) => mId !== actor.id));
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
                addToFavouriteShows,
                favouriteShows,
                removeFromFavouriteShows,
                favouriteActors,
                removeFromFavouriteActors,
                addToFavouriteActors,
            }}
        >
            {props.children}
        </MoviesContext.Provider>
    );
};

export default MoviesContextProvider;