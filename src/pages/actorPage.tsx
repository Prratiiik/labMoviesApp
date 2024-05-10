import React, {useContext} from "react";
import ActorTemplate from "../components/templateActorListPage"
import { getActors } from "../api/tmdb-api";
import { DiscoverActors, ListedActors } from "../types/interface";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToFavouriteActors from '../components/cardIcons/addToFavouritesActor';

const ActorsPage: React.FC = () => {
  const { data, error, isLoading, isError } = useQuery<DiscoverActors, Error>("Actors", getActors);
 
  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>
      {error.message}
      </h1>;
  }

  const actors = data ? data.results : [];
  
  return (
    <>
      <ActorTemplate
      title="Actors"
      actors={actors}
      actionActors={(series: ListedActors) => {
      return <AddToFavouriteActors {...series} />
      }}
      />
    </>
  );
};
export default ActorsPage;