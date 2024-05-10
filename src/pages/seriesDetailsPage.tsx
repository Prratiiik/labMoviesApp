import React, {useEffect} from "react"; // replace existing react import
import { useParams } from "react-router-dom";
import SeriesDetails from "../components/seriesDetails";
import { BaseSeries, MovieT} from "../types/interface";
import { useQuery } from "react-query";
import Spinner from '../components/spinner';
import { getOneSeries, getSeries } from "../api/tmdb-api";
import TemplateSeriesPage from "../components/templateSeriesPage";

const SeriesDetailsPage: React.FC= () => {
  const { id } = useParams();
  // const { data: series, error, isLoading, isError } = useQuery<MovieT, Error>(
  //   ["series", id],
  //   ()=> getSeries()
  // );
  const { data: series, error, isLoading, isError } = useQuery<BaseSeries, Error>(
    ["series", id],
    ()=> getOneSeries(id||"")
  );
  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{(error as Error).message}</h1>;
  }

  return (
    <>
      {series ? (
        <>
          
          <TemplateSeriesPage series={series as BaseSeries}> 
          <SeriesDetails {...series as BaseSeries} />
        </TemplateSeriesPage>
      </>
    ) : (
      <p>Waiting for series details</p>
    )}
    </>
  );
};

export default SeriesDetailsPage;