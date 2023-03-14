import React from "react";
import {Rating} from "@mui/material";
import "../Reused/reused.css";
import Typography from "@mui/material/Typography";
import ImageText from "../Reused/ImageText";

const ReviewEntry = ({review}) => {

  let rating = null;
  if (review.rating) {
    rating = <Rating name="read-only" precision={0.5} value={review.rating} readOnly/>;
  }

  let reviewTitle = null;
  if (review.title) {
    reviewTitle = <Typography variant="caption">{review.title}</Typography>;
  }

  let reviewText = null;
  if (review.review) {
    reviewText = <Typography variant="caption">{review.review}</Typography>;
  }

  return (
      <>
        <ImageText album={review._id}/>
        {rating}
        {reviewTitle}
        {reviewText}
      </>
  );
};

export default ReviewEntry;