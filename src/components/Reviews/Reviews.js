import React from "react";
import {
  Divider, List, ListItem, ListSubheader, Grid
} from "@mui/material";
import userAlbums from "../TestData/useralbums.json";
import Typography from "@mui/material/Typography";
import "../Reused/reused.css";
import ReviewEntry from "./ReviewEntry";
import ImageText from "../Reused/ImageText";
import albums from "../TestData/profilealbums.json";

const Reviews = ({bigText, smallText, image}) => {
  const reviewsList = userAlbums[user.email].reviews;

  return (<List className="profile-albums-list" subheader={<li/>}>
    <ListSubheader>
      <Typography variant="h6">Reviews</Typography>
    </ListSubheader>

    {reviewsList.map(review => {
      return (<div key={review._id}>
        <ListItem>
          <Grid container spacing={2} sx={{m: 0}}>
            <ImageText bigText={bigText} smallText={smallText} image={image}/>
            <ReviewEntry review={review}/>
          </Grid>
        </ListItem>
        <Divider/>
      </div>);
    })}
  </List>);
};

export default Reviews;