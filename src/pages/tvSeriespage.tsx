import React, {useContext} from "react";
import SeriesTemplate from "../components/templateTVSeriesListPage"
import { getSeries } from "../api/tmdb-api";
import { BaseTVSeries, DiscoverTVSeries, ListedTVSeries } from "../types/interface";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToFavouriteSeriesIcon from '../components/cardIcons/addToFavouritesSeries';

const TVSeriesPage: React.FC = () => {
  const { data, error, isLoading, isError } = useQuery<DiscoverTVSeries, Error>("discover", getSeries);
 
  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>
      {error.message}
      </h1>;
  }

  const series = data ? data.results : [];
  
  return (
    <>
      <SeriesTemplate
      title="TVSeries"
      shows={series}
      actionSeries={(series: ListedTVSeries) => {
      return <AddToFavouriteSeriesIcon {...series} />
      }}
      />
    </>
  );
};
export default TVSeriesPage;