import React from "react";
import {
  Divider, List, ListItem, ListSubheader, Grid
} from "@mui/material";
import reviews from "../TestData/reviews.json";
import albums from "../TestData/profilealbums.json";
import Typography from "@mui/material/Typography";
import "../Reused/reused.css";
import ReviewEntry from "./ReviewEntry";
import ImageText from "../Reused/ImageText";
import Rating from "@mui/material/Rating";

const Reviews = ({id, idType}) => {

  let displayReviews;
  if (idType === "user") {
    displayReviews = reviews.filter(review => review.user_id == id);
  } else {
    displayReviews = reviews.filter(review => review.album_id == id);
  }

  const getReviewHeader = (review) => {
    let album_id = review.album_id;
    let album = albums[album_id];

    return <ImageText bigText={album.title} smallText={album.artist}
                      image={album.image}/>;
  };

  return (<List className="profile-albums-list" subheader={<li/>}>
    <ListSubheader>
      <Typography variant="h6">Reviews</Typography>
    </ListSubheader>

    {displayReviews.map(review => {
      return (<div key={review.review_id}>
        <ListItem>
          <Grid container spacing={2} sx={{m: 0}}>
            <Grid container spacing={2} sx={{m: 0}}>
              <Grid item xs={9}>
                {getReviewHeader(review)}
              </Grid>
              <Grid item xs={3}>
                <Rating name="read-only" precision={0.5} value={review.rating}
                        readOnly/>
              </Grid>
            </Grid>
            <ReviewEntry review={review}/>
          </Grid>
        </ListItem>
        <Divider/>
      </div>);
    })}
  </List>);
};

export default Reviews;