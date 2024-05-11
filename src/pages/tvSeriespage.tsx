import React, {useContext} from "react";
import SeriesTemplate from "../components/templateTVSeriesListPage"
import { getSeries } from "../api/tmdb-api";
import { DiscoverTVSeries, ListedTVSeries } from "../types/interface";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToFavouriteSeriesIcon from '../components/cardIcons/addToFavouritesSeries';
import SeriesFilterUI, {
  titleFilter,
  genreFilter,
} from "../components/seriesFilterUI";
import useFiltering from "../hooks/useFiltering";

const titleFiltering = {
  name: "title",
  value: "",
  condition: titleFilter,
};
const genreFiltering = {
  name: "genre",
  value: "0",
  condition: genreFilter,
};

const TVSeriesPage: React.FC = () => {
  const { data, error, isLoading, isError } = useQuery<DiscoverTVSeries, Error>("TVSeries", getSeries);
  const series = data ? data.results : [];
  const { filterValues, setFilterValues, filterFunction } = useFiltering(
    [],
    [titleFiltering, genreFiltering]
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>
      {error.message}
      </h1>;
  }

  const displayedSeries = filterFunction(series);
  const changeFilterValues = (type: string, value: string) => {
    const changedFilter = { name: type, value: value };
    const updatedFilterSet =
      type === "title"
        ? [changedFilter, filterValues[1]]
        : [filterValues[0], changedFilter];
    setFilterValues(updatedFilterSet);
  };

  return (
    <>
      <SeriesTemplate
      title="TVSeries"
      shows={displayedSeries}
      actionSeries={(series: ListedTVSeries) => {
      return <AddToFavouriteSeriesIcon {...series} />
      }}
      />
      <SeriesFilterUI
        onFilterValuesChange={changeFilterValues}
        titleFilter={filterValues[0].value}
        genreFilter={filterValues[1].value}
      />
    </>
  );
};
export default TVSeriesPage;