import React from "react";
import "../Style/Home.css";
import Slider from "../Components/Slider";
import { Container } from "@mui/system";
import {
  CardContent,
  Typography,
  Card,
  Box,
  CardHeader,
  CardMedia,
  CardActions,
  Grid,
  Stack,
  Pagination,
} from "@mui/material";
import { Link } from "react-router-dom";
import { getAnimeList, getImgPath } from "../firebaseConfig";
import { useEffect } from "react";
import { useState } from "react";
import { Timestamp } from "firebase/firestore";
import Skeleton from "@mui/material/Skeleton";

function Home() {
  const [animeList, setAnimeList] = useState([]);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    loadAnimeList(animeList);
    console.log();
  }, []);

  async function loadAnimeList() {
    const animeAux = [];
    await getAnimeList().then(function (doc) {
      doc.forEach((element) => {
        animeAux.push(element.data());
        console.log(element.data());
      });
    });
    setAnimeList(animeAux);
    setLoading(false);
  }

  function handleEpisodeClick() {}
  const url = "AjvtWxx2g9c";
  return (
    <div className="main">
      <Container maxWidth="lg" className="container">
        <Slider></Slider>
        <Typography variant="h3">Most Popular</Typography>
        {loading && (
          <Grid
            sx={{ flexGrow: 1 }}
            container
            rowSpacing={3}
            columnSpacing={{ xs: 0.5, sm: 1, md: 1, lg: 2 }}
            alignItems="center"
            direction="row"
            justifyItems="center"
            justifyContent="center"
          >
            <Grid item xs={4}>
              <Skeleton variant="rect" width={350} height={200} />
            </Grid>
            <Grid item xs={4}>
              <Skeleton variant="rect" width={350} height={200} />
            </Grid>
            <Grid item xs={4}>
              <Skeleton variant="rect" width={350} height={200} />
            </Grid>
            <Grid item xs={4}>
              <Skeleton variant="rect" width={350} height={200}/>
            </Grid>
          </Grid>
        )}
        {!loading && (
          <Grid
            sx={{ flexGrow: 1 }}
            container
            rowSpacing={1}
            columnSpacing={{ xs: 0.5, sm: 1, md: 2, lg: 3 }}
            alignItems="center"
            direction="row"
            justifyItems="center"
            justifyContent="center"
          >
            {animeList.map((anime, key) => (
              <Grid item md={3} key={key} direction="row">
                <Link to={`/anime/${anime.name}`} state={{ anime: anime }}>
                  <Card variant="outlined">
                    {/* <CardHeader
                      title={anime.name}
                      subheader={""}
                    /> */}
                    <CardMedia
                      component="img"
                      height="170vh"
                      width="100vw"
                      image={anime.anime_img}
                      alt={anime.name}
                      sx={{objectFit: "contain" }}
                    />
                    <React.Fragment>
                      <CardContent>
                        <Typography
                          sx={{ fontSize: 14 }}
                          color="text.secondary"
                          gutterBottom
                        >
                          {anime.name}
                        </Typography>
                        <Typography
                          sx={{ fontSize: 14 }}
                          color="text.secondary"
                          gutterBottom
                        >
                          Episodes: {anime.episodeQty}
                        </Typography>
                      </CardContent>
                    </React.Fragment>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
      {/* <Stack spacing={6}>

          <Pagination count={10} color="primary" />
        </Stack> */}
    </div>
  );
}

export default Home;

// const Home = () => {
//   // const [loading, setLoading] = React.useState(true);
//   // const [animeList, setAnimeList] = useState([]);

//   async function loadAnimeList() {
//     const animeAux = [];
//     await getAnimeList().then(function (doc) {
//       doc.forEach((element) => {
//         animeAux.push(element.data());
//         console.log(element.data());
//       });
//     });
//     setAnimeList(animeAux);
//     setLoading(false);
//   }

//   return (
//     <div
//       style={{
//         display: "flex",
//         flexWrap: "wrap",
//         justifyContent: "space-around",
//         overflow: "hidden",
//         backgroundColor: "black",
//       }}
//     >
//       <Grid container spacing={3}>
//         {loading && (
//           <>
//             <Grid item xs={6}>
//               <Skeleton variant="rect" width={345} height={450} />
//             </Grid>
//             <Grid item xs={6}>
//               <Skeleton variant="rect" width={345} height={450} />
//             </Grid>
//             <Grid item xs={6}>
//               <Skeleton variant="rect" width={345} height={450} />
//             </Grid>
//             <Grid item xs={6}>
//               <Skeleton variant="rect" width={345} height={450} />
//             </Grid>
//           </>
//         )}
//         {!loading && (
//           <>
//             {animeList.map((anime) => (
//               <Grid key={anime.id} item xs={6}>
//                 <Card sx={{ maxWidth: 345 }}>
//                   <CardMedia
//                     sx={{
//                       height: 0,
//                       paddingTop: "56.25%", // 16:9
//                     }}
//                     image={anime.coverImage}
//                     title={anime.title}
//                   />
//                   <CardContent>
//                     <Typography gutterBottom variant="h5" component="h2">
//                       {anime.title}
//                     </Typography>
//                     <Typography
//                       variant="body2"
//                       color="textSecondary"
//                       component="p"
//                     >
//                       {anime.description}
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </Grid>
//             ))}
//           </>
//         )}
//       </Grid>
//     </div>
//   );
// };

// export default Home;
