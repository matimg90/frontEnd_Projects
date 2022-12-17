// eslint-disable-next-line
import React from "react";
// eslint-disable-next-line
import { Container } from "@mui/system";
// eslint-disable-next-line
import { Link, useLocation } from "react-router-dom";
import {
  CardContent,
  Card,
  CardMedia,
  Grid,
  Rating,
  Typography,
  CardHeader,
  Stack,
  Chip
} from "@mui/material";
import "../App.css";
import { useEffect } from "react";

function Anime() {
  const location = useLocation();
  const { anime } = location.state;

  useEffect(() => {
    console.log(anime.releaseDate.nanoseconds)
  }, [])
  

  const styles = {
    root: {
      width: "100%",
      height: "100%",
      minHeight: "80vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    wrapper: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    card: {
      width: "90%",
      height: "100%",
      minHeight: "50vh",
      backgroundColor:"lightgrey"
    },
    media: {
      height: '50%',
      
    },
    genres: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      "& > *": {
        margin: "0.5rem",
      },
    },
    cardContent: {
      overflow: "auto",
    },
  };

  return (
    <div className="main">
      {/* <Container>
        <Grid item
              md={2}
              >
          <Typography>{anime.name}</Typography>
          <Card variant="outlined" height="100vh">
            <CardMedia
              component="img"
              height="100%"
              image={anime.anime_img}
              alt={anime.name}
              />
          </Card>
        </Grid>
      </Container> */}
      <Stack style={styles.root}>
        <Stack style={styles.wrapper}>
          <Card style={styles.card} variant="elevation">
            <CardHeader title={anime.name} subheader={Date(anime.releaseDate.nanoseconds * 1000)}/>
            <CardMedia
              component="img"
              style={styles.media}
              image={anime.anime_img}
              title={anime.name}
            />
            <CardContent style={styles.cardContent}>
              <Typography variant="body2" color="textSecondary" component="p">
                {anime.description}
              </Typography>
              <Rating name="rating" value={5} readOnly />
              <div style={styles.genres}>
                {anime.genre.map((genre) => (
                  <Typography key={genre} variant="body2" color="textSecondary">
                    <Chip label={genre} />
                  </Typography>
                ))}
              </div>
              <Typography variant="h6">Episodes:</Typography>
              {Object.keys(anime.anime_season_episodes).map((season, index) => (
              <div key={index}>
                <Typography variant="h6">{season}:</Typography>
                <ul>
                  {Object.keys(anime.anime_season_episodes[season]).map((episode, index) => (
                    <li key={episode}>
                      <Link to={`/watch=${anime.anime_season_episodes[season][episode]}`}>{episode}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            </CardContent>
          </Card>
        </Stack>
      </Stack>
    </div>
  );
}

export default Anime;
