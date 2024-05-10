import React from "react";
import Grid from "@mui/material/Grid";
import SeriesList from "../seriesList";
import {  SeriesListPageTemplateProps} from "../../types/interface";
import Headertv from "../headerSeriesList";

const styles = {
  root: { 
    backgroundColor: "#bfbfbf",
  }
};

const SeriesListPageTemplate: React.FC<SeriesListPageTemplateProps> = (props )=> {
  console.log(props.shows)
  return (
    <Grid container sx={styles.root}>
      <Grid item xs={12}>
        <Headertv title={props.title} />
      </Grid>
      <Grid item container spacing={5}> 
      <SeriesList action={props.actionSeries} shows={props.shows} />
      </Grid>
    </Grid>
    
  );
}
export default SeriesListPageTemplate;