import React, {useEffect, useState} from 'react';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';
import "../Reused/reused.css";
import {useSelector} from "react-redux";
import {getAllReviews, deleteReview} from "../../services/reviews-service";
import {Navigate} from "react-router-dom";
import Typography from "@mui/material/Typography";
import {LikeBadge} from "../Reused/likeBadge";
import Badge from "@mui/material/Badge";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {red} from "@mui/material/colors";
import SeeMoreList from "../SeeMoreList/SeeMoreList";
import Grid from "@mui/material/Grid";

const ModeratorPanel = () => {
  let {loggedInUser, loggedInUserLoading, loggedIn} = useSelector(
      state => state.loggedInUserData);
  const [reviewsLoading, setReviewsLoading] = useState(true);
  const [reviewsData, setReviewsData] = useState([]);

  const DeleteButton = (id) => {
    return (
        <IconButton edge="end" aria-label="delete"
                    onClick={() => handleDelete(id)}>
          <DeleteIcon/>
        </IconButton>
    );
  };

  const fetchReviewsData = async () => {
    //get all reviews
    const reviews = await getAllReviews();

    setReviewsData(reviews.map(review => {
      return {
        id: review.id,
        imgUrl: review.User.image,
        stats: DeleteButton(review.id),
        primaryText: review.User.username + "'s review for " + review.Album.name,
        secondaryText: review.reviewText,
        linkUrl: ""
      }
    }));

    setReviewsLoading(false);
  };

  useEffect(() => {
    if (!loggedInUserLoading) {
      setReviewsLoading(true);
      setReviewsData([]);
      fetchReviewsData();
    }
  }, [loggedInUserLoading, loggedInUser, loggedIn]);

  const handleDelete = async (id) => {
    await deleteReview(id);
    let newReviews = reviewsData.filter((review) => review.id !== id);
    setReviewsData(newReviews);
  };

  if (loggedInUserLoading) {
    return <div>Loading ...</div>;
    // If they try to hit /moderator and aren't a mod, just redirect them to the home page
  } else if ((!loggedInUserLoading && !loggedIn) || (loggedInUser
      && !loggedInUser.isMod)) {
    return <Navigate replace to={"/"}/>;
  } else {
    return (<>
      {reviewsLoading && <Typography>Loading</Typography>}
      <Grid container sx={{mx: 'auto', width: '90%', mt: 4}}>
        <Grid item xs={12} >
          <SeeMoreList
              title={"Site Reviews"}
              items={reviewsData}
              noContentMessage={"No Reviews on the site..."}/>
        </Grid>
      </Grid>
    </>);
  }
};

export default ModeratorPanel;


