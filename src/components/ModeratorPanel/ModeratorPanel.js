import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material/';
import DeleteIcon from '@mui/icons-material/Delete';
import "../Reused/reused.css";
import { useSelector } from "react-redux";
import { getAllReviews, deleteReview } from "../../services/reviews-service";
import { Navigate } from "react-router-dom";
import Reviews from "../Reviews/Reviews";
import Typography from "@mui/material/Typography";

const ModeratorPanel = () => {

  let { loggedInUser, loading, loggedIn } = useSelector(
    state => state.loggedInUserData);
  const [reviewsLoading, setReviewsLoading] = useState(true);
  const [reviewsData, updateReviewsData] = useState([]);

  const fetchReviewsData = async () => {
    //get all reviews
    const reviews = await getAllReviews();
    updateReviewsData(reviews);
    setReviewsLoading(false);
  };

  useEffect(() => {
    if (!loading) {
      setReviewsLoading(true);
      updateReviewsData([]);
      fetchReviewsData();
    }
  }, [loading, loggedInUser, loggedIn]);

  const handleDelete = async (id) => {
    const reviews = await deleteReview(id);
    updateReviewsData(reviews);
    setReviewsLoading(false);
  };

  if (loading) {
    return <div>Loading ...</div>;
  } else if (!loading && !loggedIn) {
    return <Navigate replace to={"/"} />;
  } else {
    return (
      <>
        {reviewsLoading && <Typography>Loading</Typography>}
        <List>
          {reviewsData.map((review) => (
            <ListItem key={review.id}>
              <ListItemText primary={review.text} />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(review.id)}>
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </>

      // <Reviews reviews={reviewsData} loading={reviewsLoading} />

    );
  }
};


export default ModeratorPanel;


