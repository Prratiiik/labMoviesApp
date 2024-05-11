import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { BaseSeries } from "../../types/interface";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";

const styles = {
  chipSet: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
  },
  chipLabel: {
    margin: 0.5,
  },
  fab: {
    position: "fixed",
    top: 50,
    right: 2,
  },
};

const SeriesDetails: React.FC<BaseSeries> = (props) => {
  const series = props;
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Typography variant="h6" component="h6">
        Overview
      </Typography>
      <Typography variant="body2" component="p">
        {props.overview}
      </Typography>

      <Fab
        color="secondary"
        variant="extended"
        onClick={() => setDrawerOpen(true)}
        sx={styles.fab}
      >
        <NavigationIcon />
        Reviews
      </Fab>
      <Drawer
        anchor="top"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      ></Drawer>
    </>
  );
};
export default SeriesDetails;
