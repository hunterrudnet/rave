import React, {useEffect} from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListSubheader from "@mui/material/ListSubheader";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import "../Reused/reused.css";
import ReviewEntry from "./ReviewEntry";
import ImageText from "../Reused/ImageText";
import Rating from "@mui/material/Rating";

const Reviews = ({id, idType}) => {

  useEffect(() => {
    if (idType === "user") {
      dispatch(getReviewsForUserThunk(id));
    } else {
      dispatch(getReviewsForAlbumThunk(id));
    }
  }, []);

  const getReviewHeader = (review) => {
    let album = dispatch(getAlbumByIdThunk(review.AlbumId));
    return <ImageText bigText={album.name} smallText={album.artist}
                      image={album.images[0]}/>;
  };

  const getReviewRating = (review) => {
    let reviewRating = null;
    if (review.rating) {
      reviewRating =
          <Rating name="read-only" precision={0.5} value={review.rating}
                  readOnly/>;
    }
    return reviewRating;
  };

  return (<List className="scrollable-list" subheader={<li/>}>
    <ListSubheader>
      <Typography variant="h6">Reviews</Typography>
    </ListSubheader>
    {/*{loading && <Typography>Loading</Typography>}*/}

    {reviews.map(review => {
      return (<div key={review.review_id}>
        <ListItem>
          <Grid container spacing={2} sx={{m: 0}}>
            <Grid container spacing={2} sx={{m: 0}}>
              <Grid item xs={9}>
                <Box>
                  {getReviewHeader(review)}
                  <ReviewEntry review={review}/>
                </Box>
              </Grid>
              <Grid item xs={3}>
                {getReviewRating(review)}
              </Grid>
            </Grid>
          </Grid>
        </ListItem>
        <Divider/>
      </div>);
    })}
  </List>);
};

export default Reviews;