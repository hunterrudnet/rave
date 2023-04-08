import List from '@mui/material/List';
import Button from "@mui/material/Button";
import {useState} from "react";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import Track from './Track';
import { Box } from '@mui/material';

const TrackList = ({tracks, artistName}) => {
  const [limit, setLimit] = useState(3);

  const showMoreDocuments = () => {
    setLimit(limit + 3);
  };

  const resetLimit = () => {
    setLimit(3);
  };

  const renderRowsWithItem = (tracks) => {
    return tracks.slice(0, limit).map((track) => {
      return (<Track track={track} artistName={artistName}/>);
    });
  };

  return (
      <Box sx={{mx: 'auto', textAlign: 'center'}}>
        <List sx={{mx: 'auto', textAlign: 'center', width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
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
      </Box>
  );
};

export default TrackList;