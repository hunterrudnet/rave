import React from "react";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import "../Reused/reused.css";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const ReviewEntry = ({review}) => {

  let rating = null;
  if (review.rating) {
    rating = <Rating name="read-only" precision={0.5} value={review.rating}
                     readOnly/>;
  }

  let reviewTitle = null;
  if (review.title) {
    reviewTitle = <Typography variant="subtitle">{review.title}</Typography>;
  }

  let reviewText = null;
  if (review.text) {
    reviewText = <Typography variant="caption">{review.text}</Typography>;
  }

  return (
      <Grid container spacing={2} sx={{m: 0}}>
        <Grid item xs={12}>
          <Box>
            <div>{reviewTitle}</div>
            <div>{rating}</div>
            <div>{reviewText}</div>
          </Box>
        </Grid>
      </Grid>
  );
};

export default ReviewEntry;