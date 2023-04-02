import React, {useState} from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import {styled} from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import PlayArrow from '@mui/icons-material/PlayArrow';
import Typography from '@mui/material/Typography';
import {formatArtistNames} from "../Reused/boilerplate";

const PlayButton = styled(IconButton)({
  marginRight: -25
});

const Track = ({track}) => {
  const [artists, setArtists] = useState('');

  const formatDuration = (duration) => {
    const minutes = Math.floor(duration / 60000);
    const seconds = Math.floor((duration % 60000) / 1000);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  // call the formatArtistNames function and set the result to state
  useState(() => {
    setArtists(formatArtistNames(track.artists));
  }, [track]);

  return (
      <ListItem sx={{
        backgroundColor: "#ececec",
        borderRadius: "5px",
        marginTop: "5px"
      }}
                secondaryAction={
                  <ListItemText
                      primaryTypographyProps={{style: {fontWeight: "bold"}}}
                      edge="end"/>
                }
      >
        <ListItemText
            primary={track.name}
            secondary={artists}
        />
        <Typography variant="subtitle2">{formatDuration(
            track.duration_ms)}</Typography>
        <PlayButton
            color="primary"
            onClick={() => window.open(track.external_urls.spotify)}
        >
          <PlayArrow/>
        </PlayButton>
      </ListItem>
  );
};

export default Track;