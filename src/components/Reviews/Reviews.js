import React from "react";
import {
  Divider, List, ListItem, ListSubheader, Grid
} from "@mui/material";
import reviews from "../TestData/reviews.json";
import albums from "../TestData/profilealbums.json"
import Typography from "@mui/material/Typography";
import "../Reused/reused.css";
import ReviewEntry from "./ReviewEntry";
import ImageText from "../Reused/ImageText";

const Reviews = ({id, idType}) => {

  let displayReviews = [];
  if (idType === "user") {
    displayReviews = reviews.filter(review => review.user_id == id);
  } else {
    displayReviews = reviews.filter(review => review.album_id == id);
  }

  const getReviewHeader(review) = {
    let album = review.
    return <ImageText bigText
  }

  return (<List className="profile-albums-list" subheader={<li/>}>
    <ListSubheader>
      <Typography variant="h6">Reviews</Typography>
    </ListSubheader>

    {displayReviews.map(review => {
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