import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import { getReviewsForUser } from '../../services/reviews-service';

const Root = styled(Box)(({ theme }) => ({
  backgroundColor: '#ececec',
  padding: theme.spacing(2),
  borderRadius: 10
}));

const Header = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(2)
}));

const DividerStyled = styled(Divider)(({ theme }) => ({
  marginBottom: theme.spacing(2)
}));

const Text = styled(TextField)(({ theme }) => ({
  backgroundColor: 'white',
  borderRadius: 5,
  marginBottom: theme.spacing(2)
}));

const ButtonsContainer = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between'
}));

const StyledRating = styled(Rating)(() => ({
  position: "center%"
}));

const WriteReview = ({
  albumName,
  albumIDFromDB,
  loggedInUserId,
  submitReview,
  reviewsLen
}) => {
  const [userReview, setUserReview] = useState({ reviewText: "", score: 0 });
  const [userHasReview, setUserHasReview] = useState(false);

  const fetchUserReview = async () => {
    const allUserReviews = await getReviewsForUser(loggedInUserId);
    const foundUserReview = allUserReviews.find(
      review => review.AlbumId === albumIDFromDB && review.UserId
        === loggedInUserId);
    if (foundUserReview) {
      setUserHasReview(true);
      setUserReview({
        reviewText: foundUserReview.reviewText,
        score: foundUserReview.score
      });
    } else {
      setUserHasReview(false);
    }
  };

  useEffect(() => {
    if (loggedInUserId) {
      fetchUserReview();
    }
  }, [loggedInUserId, reviewsLen]);

  const handleScoreChange = (event) => {
    let score = event.target.value;
    score = score ? score : 0;
    setUserReview({ ...userReview, score: score });
  };

  const handleReviewTextChange = (event) => {
    setUserReview({ ...userReview, reviewText: event.target.value });
  };

  const handleClearReview = () => {
    setUserReview({ reviewText: "", score: 0 });
  };

  const handleSubmitReview = async () => {
    const result = await submitReview(userReview);
    if (result) {
      setUserReview(result);
      setUserHasReview(true);
    }
  };

  return (
    <Root>
      <Header>
        <Typography variant="h5">
          {`${userHasReview ? "Edit your"
            : "Write a"} review for ${albumName}`}
        </Typography>
      </Header>
      <DividerStyled />
      <Text
        id="review-text"
        multiline
        rows={4}
        fullWidth
        placeholder="Write your review here"
        value={userReview.reviewText}
        onChange={handleReviewTextChange}
      />
      <DividerStyled />
      <ButtonsContainer>
        <Button variant="contained" color="primary" disabled={!loggedInUserId}
          onClick={() => handleSubmitReview()}>
          {userHasReview ? 'Update' : 'Submit'}
        </Button>
        <StyledRating value={userReview.score} precision={0.5}
          max={5} name="score" onChange={handleScoreChange} />
        <Button variant="outlined" onClick={handleClearReview}>
          Clear
        </Button>
      </ButtonsContainer>
    </Root>
  );
};

export default WriteReview;
