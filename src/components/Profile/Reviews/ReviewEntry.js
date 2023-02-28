import React from "react";
import {Rating} from "@mui/material";
import "../profile.css";
import Typography from "@mui/material/Typography";
import AlbumEntry from "../AlbumEntry";

const ReviewEntry = ({review}) => {

  let rating = null;
  if (review.rating) {
    rating = <Rating name="read-only" precision={0.5} value={review.rating}/>;
  }

  let reviewText = null;
  if (review.review) {
    reviewText = <Typography variant="caption">{review.review}</Typography>;
  }

  return (
      <>
        <AlbumEntry album={review._id}/>
        {rating}
        {reviewText}
      </>
  );
};

export default ReviewEntry;