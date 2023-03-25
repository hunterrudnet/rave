import React, {useEffect} from "react";
import {
  Divider, List, ListItem, ListSubheader, Grid
} from "@mui/material";
import albums from "../TestData/profilealbums.json";
import Typography from "@mui/material/Typography";
import "../Reused/reused.css";
import ReviewEntry from "./ReviewEntry";
import ImageText from "../Reused/ImageText";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import {useDispatch, useSelector} from "react-redux";
import {
  getReviewsForUserThunk, getReviewsForAlbumThunk
} from "../../services/reviews-thunks";
import {getAlbumByIdThunk} from "../../services/albums-thunks"

const Reviews = ({id, idType}) => {

  const {reviews} = useSelector(state => state.reviewsData);
  const dispatch = useDispatch();

  useEffect(() => {
    if (idType === "user") {
      dispatch(getReviewsForUserThunk(id));
    } else {
      dispatch(getReviewsForAlbumThunk(id));
    }
  }, []);

  const getReviewHeader = (review) => {
    let album_id = review.AlbumId;
    const {albums} =
    dispatch()
    let album = albums[album_id];


    return <ImageText bigText={album.title} smallText={album.artist}
                      image={album.image}/>;
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
    {loading && <Typography>Loading</Typography>}

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