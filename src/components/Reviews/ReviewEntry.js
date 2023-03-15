import React from "react";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import "../Reused/reused.css";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const ReviewEntry = ({ review }) => {
  let reviewTitle = null;
  if (review.title) {
    reviewTitle = <Typography variant="subtitle">{review.title}</Typography>;
  }

  let reviewText = null;
  if (review.text) {
    reviewText = <Typography variant="caption">{review.text}</Typography>;
  }

  return (
    <Grid container spacing={2} sx={{ ml: 18.5 }}>
      <Grid item xs={20}>
        <div>
          <div>{reviewTitle}</div>
          <div>{reviewText}</div>
        </div>
      </Grid>
    </Grid>
  );
};

export default ReviewEntry;