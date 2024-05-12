import React from "react";
import { useParams } from "react-router-dom";
import ActorDetails from "../components/actorDetails";
import { ActorT, BaseActors } from "../types/interface";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { getOneActors } from "../api/tmdb-api";
import TemplateActorPage from "../components/templateActorPage";

const ActorDetailsPage: React.FC = () => {
  const { id } = useParams();
  const {
    data: actors,
    error,
    isLoading,
    isError,
  } = useQuery<BaseActors, Error>(["actors", id], () => getOneActors(id || ""));
  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{(error as Error).message}</h1>;
  }

  return (
    <>
      {actors ? (
        <>
          <TemplateActorPage actors={actors as ActorT}>
            <ActorDetails {...(actors as ActorT)} />
          </TemplateActorPage>
        </>
      ) : (
        <p>Waiting for actors details</p>
      )}
    </>
  );
};

export default ActorDetailsPage;