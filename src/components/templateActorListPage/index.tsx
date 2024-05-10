import React from "react";
import Grid from "@mui/material/Grid";
import ActorsList from "../actorsList";
import {ActorsListPageTemplateProps} from "../../types/interface";
import Headeractor from "../headerActorList";

const styles = {
  root: { 
    backgroundColor: "#bfbfbf",
  }
};

const ActorListPageTemplate: React.FC<ActorsListPageTemplateProps> = (props )=> {
  console.log(props.actors)
  return (
    <Grid container sx={styles.root}>
      <Grid item xs={12}>
        <Headeractor title={props.title} />
      </Grid>
      <Grid item container spacing={5}> 
      <ActorsList action={props.actionActors} actors={props.actors} />
      </Grid>
    </Grid>
    
  );
}
export default ActorListPageTemplate;