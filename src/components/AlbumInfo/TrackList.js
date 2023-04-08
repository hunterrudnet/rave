import List from '@mui/material/List';
import Button from "@mui/material/Button";
import {useState} from "react";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import Track from './Track';

const TrackList = ({tracks, artistName}) => {
  const [limit, setLimit] = useState(3);

  const showMoreDocuments = () => {
    setLimit(limit + 3);
  };

  const resetLimit = () => {
    setLimit(3);
  };

  const renderRowsWithItem = (tracks) => {
    return tracks.slice(0, limit).map((track, index) => {
      return (<Track key={index} track={track} artistName={artistName}/>);
    });
  };

  return (
      <div>
        <List sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
          {renderRowsWithItem(tracks)}
        </List>

        <Button
            endIcon={<KeyboardArrowDown/>}
            onClick={showMoreDocuments}
            sx={{display: limit >= tracks.length ? "none" : ""}}
        >
          see more
        </Button>
        <Button
            endIcon={<KeyboardArrowUp/>}
            onClick={resetLimit}
            sx={{display: limit > tracks.length ? "" : "none"}}
        >
          see less
        </Button>
      </div>
  );
};

export default TrackList;