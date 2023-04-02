import List from '@mui/material/List';
import Button from "@mui/material/Button";
import {useState} from "react";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";
import DetailsCard from './DetailsCard';

const DetailsCardList = ({reviews}) => {
  const [limit, setLimit] = useState(2);

  const showMoreDocuments = () => {
    setLimit(limit + 2);
  };

  const resetLimit = () => {
    setLimit(2);
  };

  const renderRowsWithItem = (
      reviews
  ) => {
    return reviews.slice(0, limit).map((review, i) => {
      return (
          <DetailsCard album={review} sx={{mb: "25"}}/>
      );
    });
  };

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
};

export default DetailsCardList;