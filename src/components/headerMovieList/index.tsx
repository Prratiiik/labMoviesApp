import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

const styles = {
  root: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    marginBottom: 1.5,
  },
};

const Header: React.FC<{
  title: string;
  page: number;
  pageSetter: (page: number) => void;
}> = ({ title, page }) => {
  return (
    <Paper component="div" sx={styles.root}>
      <IconButton
        aria-label="go back"
        disabled={page === 1}
        style={page === 1 ? { opacity: 0.5, cursor: "not-allowed" } : undefined}
      >
        <ArrowBackIcon color="primary" fontSize="large" />
      </IconButton>

      <Typography variant="h4" component="h3">
        {title}
      </Typography>
      <IconButton aria-label="go forward">
        <ArrowForwardIcon color="primary" fontSize="large" />
      </IconButton>
    </Paper>
  );
};

export default Header;
