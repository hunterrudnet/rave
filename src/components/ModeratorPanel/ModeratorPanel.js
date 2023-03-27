import React, { useState } from 'react';
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material/';
import DeleteIcon from '@mui/icons-material/Delete';


const ModeratorPanel = () => {
  const [reviews, setReviews] = useState([
    { id: 1, text: 'This is a great product' },
    { id: 2, text: 'I didn\'t like this product' },
    { id: 3, text: 'Amazing customer service' },
  ]);

  const handleDelete = (id) => {
    const filteredReviews = reviews.filter((review) => review.id !== id);
    setReviews(filteredReviews);
  };

  return (
      <List>
        {reviews.map((review) => (
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
  );
};

export default ModeratorPanel;
