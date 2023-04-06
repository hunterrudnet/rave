import List from '@mui/material/List';
import Button from "@mui/material/Button";
import {useState} from "react";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import ReviewCard from './ReviewCard';
import Typography from "@mui/material/Typography";
import ListSubheader from "@mui/material/ListSubheader";
import {handleDeleteGeneral} from "../Reused/ReusedFunctions";
import {useSelector} from "react-redux";

const ReviewsCardList = ({
  loading,
  reviewsData,
  getReviewHeaderData,
  reviewsListTitle,
  setReviewsData,
  handleDelete
}) => {
  let {loggedInUser} = useSelector(state => state.loggedInUserData);
  const [limit, setLimit] = useState(2);

  const showMoreDocuments = () => {
    setLimit(limit + 2);
  };

  const resetLimit = () => {
    setLimit(2);
  };

  if (!handleDelete) {
    handleDelete = async (id) => {
      await handleDeleteGeneral(id, reviewsData, setReviewsData);
    };
  }

  const renderRowsWithItem = () => {
    return reviewsData.slice(0, limit).map((review) => {
      return (<ReviewCard {...getReviewHeaderData(review)}
                          score={review.score}
                          reviewText={review.reviewText}
                          reviewUserId={review.UserId}
                          canDelete={review.UserId === loggedInUser.id}
                          handleDelete={() => handleDelete(review.id)}
                          sx={{mb: "25"}}/>);
    });
  };

  const showMoreButton = () => {
    return (<Button
        endIcon={<KeyboardArrowDown/>}
        onClick={showMoreDocuments}
        sx={{display: limit >= reviewsData.length ? "none" : ""}}
    >
      see more
    </Button>);
  };

  const showLessButton = () => {
    return (<Button
        endIcon={<KeyboardArrowUp/>}
        onClick={resetLimit}
        sx={{display: limit > reviewsData.length ? "" : "none"}}
    >
      see less
    </Button>);
  };

  if (loading) {
    return <h2>Loading...</h2>;
  } else {
    return (
        <div>
          <List sx={{width: '100%', bgcolor: 'background.paper'}}>
            <ListSubheader>
              <Typography variant="h6">{reviewsListTitle}</Typography>
            </ListSubheader>
            {renderRowsWithItem()}
          </List>
          {reviewsData.length > 2 && showMoreButton()}
          {reviewsData.length > 2 && showLessButton()}

        </div>
    );
  }
};

export default ReviewsCardList;