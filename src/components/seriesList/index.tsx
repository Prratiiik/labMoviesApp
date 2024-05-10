import React from "react";
// import Movie from "../movieCard/";
import Series from "../seriesCard";
import Grid from "@mui/material/Grid";
import { ListedTVSeries } from "../../types/interface";

interface SeriesListProps {
  shows: ListedTVSeries[],
  action: (m: ListedTVSeries) => React.ReactNode;
}

const SeriesList: React.FC<SeriesListProps> = (props) => {
  const series=props.shows;
  let seriesCards = series.map((s) => (
    // <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
    //   <Movie key={m.id} movie={m}  action={props.action}/>
    // </Grid>
    <Grid key={s.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
    <Series key={s.id} series={s} action={props.action} />
    </Grid>
  ));
  return seriesCards;
}

  export default SeriesList;