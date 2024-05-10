import React, { useContext } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { MoviesContext } from "../../contexts/moviesContext";

const styles = {
    root: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexWrap: "wrap",
        marginBottom: 1.5,
    },
};

interface HeaderProps {
    title: string;
}
const Headeractor: React.FC<{ title: string }> = ( {title} ) => {
    return (
        <Paper component="div" sx={styles.root}>
            <IconButton
                aria-label="go back"
                // disabled={page === 1}
                // style={page === 1 ? { opacity: 0.5, cursor: 'not-allowed' } : undefined}
                // onClick={() => pageSetter((old: number) => Math.max(old - 1, 1))}
            >
                <ArrowBackIcon color="primary" fontSize="large" />
            </IconButton>

            <Typography variant="h4" component="h3">
                {title}
            </Typography>
            <IconButton
                aria-label="go forward"
                // onClick={() => pageSetter((old: number) => old + 1)}
            >

                <ArrowForwardIcon color="primary" fontSize="large" />
            </IconButton>
        </Paper>
    );
};

export default Headeractor;