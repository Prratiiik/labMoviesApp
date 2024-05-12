import React, { ReactNode } from "react";
import Grid from "@mui/material/Grid";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { getActorImages } from "../../api/tmdb-api";
import { ActorT, ActorImage } from "../../types/interface";
import { useQuery } from "react-query";
import Spinner from "../spinner";
import ActorsHeader from "../headerActor";

const styles = {
  gridListRoot: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  gridListTile: {
    width: 450,
    height: "100vh",
  },
  scrollableContainer: {
    height: "80vh",
    overflow: "auto",
  },
};

interface TemplateActorPageProps {
  actors: ActorT;
  children: ReactNode;
}

const TemplateActorPage: React.FC<TemplateActorPageProps> = (props) => {
  const { actors, children } = props;
  const { data, error, isLoading, isError } = useQuery<ActorImage[], Error>(
    ["images", actors.id],
    () => getActorImages(actors.id)
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const images = data as ActorImage[];

  return (
    <>
      <ActorsHeader {...actors} />

      <Grid container spacing={5} style={{ padding: "15px" }}>
        <Grid item xs={3}>
          <div style={styles.scrollableContainer}>
            <ImageList cols={1}>
              {images.map((image: ActorImage) => (
                <ImageListItem
                  key={image.file_path}
                  sx={styles.gridListTile}
                  cols={1}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${image.file_path}`}
                    alt={"Image alternative"}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </div>
        </Grid>

        <Grid item xs={9}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default TemplateActorPage;
