import React from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  ListSubheader
} from "@mui/material";
import favoriteAlbums from "./favoritealbums.json";
import FavoriteAlbumEntry from "./FavoriteAlbumEntry/FavoriteAlbumEntry";
import Typography from "@mui/material/Typography";

const FavoriteAlbums = ({user}) => {
  const albumsList = favoriteAlbums[user.email];

  return (
      <List sx={{
        width: '100%',
        maxWidth: 360,
        overflow: 'auto',
        maxHeight: 500
      }}
            subheader={<li/>}>
        <ListSubheader>
          <Typography variant="h6">Favorite Albums</Typography>
        </ListSubheader>

        {albumsList.map(album => {
          return (
              <>
                <ListItem key={album._id}>
                  <FavoriteAlbumEntry album={album}/>
                </ListItem>
                <Divider/>
              </>
          );
        })}
      </List>
  );
};

export default FavoriteAlbums;