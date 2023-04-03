import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { Rating } from '@mui/material';
import { useSelector } from "react-redux";
import { getReviewsForUser } from '../../services/reviews-service';
import { createOrUpdateReview } from '../../services/reviews-service';
import { getUser } from '../../services/user-service';

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

const StyledRating = styled(Rating)(({ theme }) => ({
  position: "center%",
}));

function WriteReview({albumName, albumIDFromDB}) {

  const { loggedInUser, loggedIn } = useSelector(state => state.loggedInUserData);
  const [userIDFromDB, setUserIDFromDB] = useState();
  const [userReview, setUserReview] = useState();
  const [reviewText, setReviewText] = useState('');
  const [stars, setStars] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const userFromDB = await getUser(loggedInUser.username);
      setUserIDFromDB(userFromDB.id);
      const allUserReviews = await getReviewsForUser(userFromDB.id);
      const foundUserReview = allUserReviews.find(review => review.AlbumId === albumIDFromDB && review.UserId === userFromDB.id);
      if (foundUserReview) {
        setUserReview(foundUserReview);
        setReviewText(foundUserReview.reviewText);
        setStars(foundUserReview.score);
      }
    }
  
    if (loggedInUser && !userIDFromDB) {
      fetchData();
    }
  }, [loggedInUser, userIDFromDB]);
  

  const handleReviewTextChange = (event) => {
    setReviewText(event.target.value);
  };

  const handleClearReview = () => {
    setReviewText('');
  };

  const handleStarsChange = (event) => {
    setStars(event.target.value);
  }

  async function handleSubmitReview() {
    const review = {
      userId: userIDFromDB,
      albumId: albumIDFromDB,
      score: stars,
      reviewText: reviewText
    };
    const result = await createOrUpdateReview(review);
    if (result) {
      setUserReview(result);
      setReviewText(result.reviewText);
      setStars(result.score);
    }
    window.location.reload();
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
        placeholder='Write your review here'
        value={reviewText}
        onChange={handleReviewTextChange}
      />
      <DividerStyled />
      <ButtonsContainer>
        <Button variant="contained" color="primary" onClick={() => handleSubmitReview()} disabled={!loggedIn}>
            {userReview ? 'Update' : 'Submit'}
        </Button>
        <StyledRating value={stars} precision={0.5} max={5} onChange={handleStarsChange}/>
        <Button variant="outlined" onClick={handleClearReview}>
            Clear
        </Button>
      </ButtonsContainer>
    </Root>
  );
}

export default WriteReview;
