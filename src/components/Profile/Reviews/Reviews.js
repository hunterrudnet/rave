import React from "react";
import {
  Divider, List, ListItem, ListSubheader, Grid
} from "@mui/material";
import userAlbums from "../useralbums.json";
import Typography from "@mui/material/Typography";
import "../profile.css";
import ReviewEntry from "./ReviewEntry";
import AlbumEntry from "../AlbumEntry";
import albums from "../../albums.json";

const Reviews = ({user}) => {
  const reviewsList = userAlbums[user.email].reviews;

  return (<List className="profile-albums-list" subheader={<li/>}>
    <ListSubheader>
      <Typography variant="h6">Reviews</Typography>
    </ListSubheader>

    {reviewsList.map(review => {
      return (<div key={review._id}>
        <ListItem>
          <Grid container spacing={2} sx={{m: 0}}>
            <AlbumEntry album={albums[review.album_id]}/>
            <ReviewEntry review={review}/>
          </Grid>
        </ListItem>
        <Divider/>
      </div>);
    })}
  </List>);
};

export default Reviews;