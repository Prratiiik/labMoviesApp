import React from "react";
import ActorTemplate from "../components/templateActorListPage";
import { getActors } from "../api/tmdb-api";
import { ListedActors } from "../types/interface";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToFavouriteActorsIcon from "../components/cardIcons/addToFavouritesActor";

const ActorsPage: React.FC = () => {
  const { data, error, isLoading, isError } = useQuery(
    "Actors",
    getActors
  );
  
  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>error</h1>;
  }
  const actors = data ? data.results : [];
  return (
    <>
      <ActorTemplate
        title="Actors"
        actors={actors}
        actionActors={(actors: ListedActors) => {
          return <AddToFavouriteActorsIcon {...actors} />;
        }}
      />
    </>
  );
};
export default ActorsPage;
