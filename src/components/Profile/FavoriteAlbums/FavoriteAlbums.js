import React from "react";
import {
  Divider, List, ListItem, ListSubheader, Grid
} from "@mui/material";
import userAlbums from "../useralbums.json";
import albums from "../../albums.json";
import AlbumEntry from "../AlbumEntry";
import Typography from "@mui/material/Typography";
import "../profile.css";

const FavoriteAlbums = ({user}) => {
  const favoritesList = userAlbums[user.email].favorites;

  return (<List className="profile-albums-list" subheader={<li/>}>
    <ListSubheader>
      <Typography variant="h6">Favorite Albums</Typography>
    </ListSubheader>

    {favoritesList.map(favorite => {
      return (<div key={favorite}>
        <ListItem>
          <Grid container spacing={2} sx={{m: 0}}>
            <AlbumEntry album={albums[favorite]}/>
          </Grid>
        </ListItem>
        <Divider/>
      </div>);
    })}
  </List>);
}
  ;

  export default FavoriteAlbums;