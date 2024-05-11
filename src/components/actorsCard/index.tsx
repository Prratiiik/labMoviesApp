import React, { useContext  } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import Grid from "@mui/material/Grid";
import img from '../../images/film-poster-placeholder.png';
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import { MoviesContext } from "../../contexts/moviesContext";
import { ListedActors } from "../../types/interface";
import { Navigate } from "react-router-dom";


const styles = {
  card: { maxWidth: 345 },
  media: { height: 500 },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
};
interface ActorsListProps {
    actors:ListedActors,
    action: (s: ListedActors) => React.ReactNode;
  }
  
  
  const ActorsCard: React.FC<ActorsListProps> = (props) => {
    const actors = {...props.actors, favourite: false};
     
    const { favouriteActors } = useContext(MoviesContext);
    const openDetails = (e: any ) => {
        if (e.target instanceof SVGElement) return;
        <Navigate to ={`/actors/${actors.id}`} replace={true} />
      };
    
    if (favouriteActors.find((id: any) => id === actors.id)) 
      actors.favourite = true;
     {props.action(actors)}

    //  onClick={openDetails}
  return (
    <Card sx={styles.card}
     >
      <CardHeader
        avatar={
          actors.favourite ? (
            <Avatar sx={styles.avatar}>
              <FavoriteIcon />
            </Avatar>
          ) : null
        }
        title={
          <Typography variant="h5" component="p">
            {actors.name}{" "}
          </Typography>
        }
      />
      <CardMedia
        sx={styles.media}
        image={
          actors.profile_path
            ? `https://image.tmdb.org/t/p/w500/${actors.profile_path}`
            : img
        }
      />
      {/* <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <CalendarIcon fontSize="small" />
              {actors.known_for_department}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "} {actors.popularity }{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent> */}
      <CardActions disableSpacing>
           {props.action(actors)}
          <Link to={`/actors/${actors.id}`}>
          <Button variant="outlined" size="medium" color="primary">
             Info
          </Button>
          </Link>
       </CardActions>
    </Card>
  );
}

export default ActorsCard;