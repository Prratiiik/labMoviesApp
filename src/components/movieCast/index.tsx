// import React from "react";
// import { useQuery } from "react-query";
// import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
// import Spinner from "../spinner";
// import img from "../../images/film-poster-placeholder.png";
// // import { getMovieCast } from "../../api/tmdb-api";
// import Box from "@mui/material/Box";

// type Movie = {
//   id: number;
//   title: string;
//   // Add other movie properties as needed
//   cast: {
//     id: number;
//     name: string;
//     character: string;
//     profile_path: string | null;
//   }[];
// };

// type MovieCastListProps = {
//   movie: Movie;
// };

// const styles = {
//   container: {
//     overflowX: "scroll",
//     display: "flex",
//     flexDirection: "row" as "row", // Specify the type explicitly
//   },
//   card: {
//     marginLeft: "20px",
//     minWidth: "170px",
//   },
//   media: {
//     height: "150px",
//   },
// };

// const MovieCastList: React.FC<MovieCastListProps> = ({ movie }) => {
//   const { isLoading, isError, error, data } = useQuery(
//     ["movie cast", movie],
//     () => getMovieCast(movie.id)
//   );

//   if (isLoading) {
//     return <Spinner />;
//   }

//   if (isError) {
//     return <h1>{(error as Error).message}</h1>; // Cast 'error' to Error type
//   }

//   return (
//     <Box sx={styles.container}>
//       {data?.map((cast: any) => (
//         <Box key={cast.id} style={styles.card}>
//           <Card>
//             <CardMedia
//               sx={styles.media}
//               image={
//                 cast.profile_path
//                   ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}`
//                   : img
//               }
//             />
//             <CardContent>
//               <Grid container>
//                 <Grid item>
//                   <Typography variant="subtitle2" component="p">
//                     {cast.name}
//                   </Typography>
//                   <Typography
//                     noWrap={true}
//                     variant="caption"
//                     component="p"
//                     fontStyle="italic"
//                   >
//                     {cast.character}
//                   </Typography>
//                 </Grid>
//               </Grid>
//             </CardContent>
//           </Card>
//         </Box>
//       ))}
//     </Box>
//   );
// };

// export default MovieCastList;
