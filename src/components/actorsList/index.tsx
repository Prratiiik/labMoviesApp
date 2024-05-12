import React from "react";
import Actors from "../actorsCard";
import Grid from "@mui/material/Grid";
import { ListedActors } from "../../types/interface";

interface ActorListProps {
    actors: ListedActors[],
  action: (m: ListedActors) => React.ReactNode;
}

const ActorList: React.FC<ActorListProps> = (props) => {
  const actors=props.actors;
  let actorCards = actors.map((s) => (
    <Grid key={s.id} item xs={1} sm={6} md={4} lg={3} xl={3}>
    <Actors key={s.id} actors={s} action={props.action} />
    </Grid>
  ));
  return actorCards;
}

  export default ActorList;