import React from "react";
import {Divider, Grid} from "@mui/material";
import "./favoritealbumentry.css";
import Typography from "@mui/material/Typography";

const FavoriteAlbumEntry = ({album}) => {

  return (
      <Grid container spacing={2} sx={{m: 0}}>
        <Grid item xs={3}>
          <img src={album.picture} className="album-picture"/>
        </Grid>
        <Grid item xs={9}>
          <Typography variant="h6">{album.title}</Typography>
          <Typography variant="subtitle">{album.artist}</Typography>
        </Grid>
      </Grid>
  );
};

export default FavoriteAlbumEntry;