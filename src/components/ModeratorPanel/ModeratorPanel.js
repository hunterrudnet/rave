import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material/';
import DeleteIcon from '@mui/icons-material/Delete';
import "../Reused/reused.css";
import { useSelector } from "react-redux";
import { getAllReviews, deleteReview } from "../../services/reviews-service";
import { Navigate } from "react-router-dom";
import Typography from "@mui/material/Typography";

const ModeratorPanel = () => {

  let { loggedInUser, loggedInUserLoading, loggedIn } = useSelector(state => state.loggedInUserData);
  const [reviewsLoading, setReviewsLoading] = useState(true);
  const [reviewsData, setReviewsData] = useState([]);

  const fetchReviewsData = async () => {
    //get all reviews
    const reviews = await getAllReviews();
    setReviewsData(reviews);
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
  } else if ((!loggedInUserLoading && !loggedIn) || (loggedInUser && !loggedInUser.isMod)) {
    return <Navigate replace to={"/"} />;
  } else {
    return (
      <>
        {reviewsLoading && <Typography>Loading</Typography>}
        <List>
          {reviewsData.map((review) => (
            <ListItem key={review.id}>
              <ListItemText primary={review.reviewText} />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(review.id)}>
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </>
    );
  }
};


export default ModeratorPanel;


