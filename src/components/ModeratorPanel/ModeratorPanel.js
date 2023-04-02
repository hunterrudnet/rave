import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material/';
import DeleteIcon from '@mui/icons-material/Delete';
import "../Reused/reused.css";
import { useSelector } from "react-redux";
import { getAllReviews, deleteReview } from "../../services/reviews-service";
import { Navigate } from "react-router-dom";
import Reviews from "../Reviews/Reviews";

const ModeratorPanel = () => {
  // const [reviews, setReviews] = useState([
  //   { id: 1, text: 'This is a great product' },
  //   { id: 2, text: 'I didn\'t like this product' },
  //   { id: 3, text: 'Amazing customer service' },
  // ]);

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

  // new method for deleting
  // const handleDelete = (id) => {
  //   const filteredReviews = reviewsData.filter((review) => review.id !== id);
  //   // const filteredReviews = reviews.filter((review) => review.id !== id);
  //   updateReviewsData(filteredReviews);
  //   // setReviews(filteredReviews);
  // };
  const handleDelete = async (id) => {
    const reviews = await deleteReview(id);
    updateReviewsData(reviews);
    setReviewsLoading(false);
    // const filteredReviews = reviewsData.filter((review) => review.id !== id);
    // // const filteredReviews = reviews.filter((review) => review.id !== id);
    // updateReviewsData(filteredReviews);
    // setReviews(filteredReviews);
  };

  if (loading) {
    return <div>Loading ...</div>;
  } else if (!loading && !loggedIn) {
    return <Navigate replace to={"/"} />;
  } else {
    return (
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
      // <Reviews reviews={reviewsData} loading={reviewsLoading} />

    );
  }
};

export default ModeratorPanel;
