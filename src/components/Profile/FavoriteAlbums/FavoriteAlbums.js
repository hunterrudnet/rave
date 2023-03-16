import React from "react";
import {
  Divider, List, ListItem, ListSubheader, Grid
} from "@mui/material";
import userAlbums from "../../TestData/useralbums.json";
import albums from "../../TestData/profilealbums.json";
import ImageText from "../../Reused/ImageText";
import Typography from "@mui/material/Typography";
import "../../Reused/reused.css";

const FavoriteAlbums = ({user}) => {
      const favoritesList = userAlbums[user.email].favorites;

      return (<List className="profile-albums-list" subheader={<li/>}>
        <ListSubheader>
          <Typography variant="h6">Favorite Albums</Typography>
        </ListSubheader>

        {favoritesList.map(favorite => {
          let album = albums[favorite];
          return (<div key={favorite}>
            <ListItem>
              <Grid container spacing={2} sx={{m: 0}}>
                <ImageText bigText={album.title} smallText={album.artist} image={album.image}/>
              </Grid>
            </ListItem>
            <Divider/>
          </div>);
        })}
      </List>);
    }
;

export default FavoriteAlbums;