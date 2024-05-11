import React from "react";
import { useParams } from "react-router-dom";
import SeriesDetails from "../components/seriesDetails";
import { BaseSeries, SimilarTVSeries } from "../types/interface";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { getOneSeries, getSimilarSeries } from "../api/tmdb-api";
import TemplateSeriesPage from "../components/templateSeriesPage";
import SimilarSeries from "../components/similarSeries";

const SeriesDetailsPage: React.FC = () => {
  const { id } = useParams();
  const {
    data: series,
    error,
    isLoading,
    isError,
  } = useQuery<BaseSeries, Error>(["series", id], () => getOneSeries(id || ""));

  const {
    data: similarSeries,
    error: similarSeriesError,
    isLoading: similarSeriesLoading,
    isError: similarSeriesIsError,
  } = useQuery<SimilarTVSeries, Error>(["similarSeries", id], () =>
    getSimilarSeries(id || "")
  );

  if (isLoading || similarSeriesLoading) {
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
            <SeriesDetails {...(series as BaseSeries)} />
            <SimilarSeries series={similarSeries?.results || []} />
          </TemplateSeriesPage>
        </>
      ) : (
        <p>Waiting for series details</p>
      )}
    </>
  );
};

export default SeriesDetailsPage;
