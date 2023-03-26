import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const Root = styled(Box)(({ theme }) => ({
  backgroundColor: '#ececec',
  padding: theme.spacing(2),
  borderRadius: 10,
}));

const Header = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
}));

const DividerStyled = styled(Divider)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const Text = styled(TextField)(({ theme }) => ({
  backgroundColor: 'white',
  padding: theme.spacing(2),
  borderRadius: 5,
  marginBottom: theme.spacing(2),
}));

const ButtonsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
}));

function WriteReview({albumName}) {
  const [reviewText, setReviewText] = useState('');

  const handleReviewTextChange = (event) => {
    setReviewText(event.target.value);
  };

  const handleClearReview = () => {
    setReviewText('');
  };

  const handleSubmitReview = () => {
    console.log('Submitting review:', reviewText);
    // handle submitting the review
  };

  return (
    <Root>
      <Header>
        <Typography variant="h5">
          {`Write a Review for ${albumName}`}
        </Typography>
      </Header>
      <DividerStyled />
      <Text
        id="review-text"
        multiline
        rows={4}
        fullWidth
        value={reviewText}
        onChange={handleReviewTextChange}
      />
      <DividerStyled />
      <ButtonsContainer>
      <Button variant="contained" color="primary" onClick={handleSubmitReview}>
          Submit
        </Button>
        <Button variant="outlined" onClick={handleClearReview}>
          Clear
        </Button>
      </ButtonsContainer>
    </Root>
  );
}

export default WriteReview;
