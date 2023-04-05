import List from '@mui/material/List';
import Button from "@mui/material/Button";
import {useState} from "react";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import ReviewCard from './ReviewCard';

const ReviewsCardList = ({loading, reviews}) => {
  const [limit, setLimit] = useState(2);

  const showMoreDocuments = () => {
    setLimit(limit + 2);
  };

  const resetLimit = () => {
    setLimit(2);
  };

  const renderRowsWithItem = (reviews) => {
    return reviews.slice(0, limit).map((review) => {
      return (<ReviewCard image={review.User.image} alt={review.User.username}
                          link={`/profile/${review.User.username}`}
                          score={review.score}
                          topText={review.User.username}
                          bottomText={review.User.username}
                          reviewText={review.reviewText}
                          sx={{mb: "25"}}/>);
    });
  };

  if (loading) {
    return <h2>Loading...</h2>;
  } else {
    return (
        <div>
          <List sx={{width: '100%', bgcolor: 'background.paper'}}>
            {renderRowsWithItem(reviews)}
          </List>

          <Button
              endIcon={<KeyboardArrowDown/>}
              onClick={showMoreDocuments}
              sx={{display: limit >= reviews.length ? "none" : ""}}
          >
            see more
          </Button>
          <Button
              endIcon={<KeyboardArrowUp/>}
              onClick={resetLimit}
              sx={{display: limit > reviews.length ? "" : "none"}}
          >
            see less
          </Button>
        </div>
    );
  }
};

export default ReviewsCardList;