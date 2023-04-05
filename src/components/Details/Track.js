import React, {useEffect, useState} from 'react';
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from '@mui/material/IconButton';
import PlayArrow from '@mui/icons-material/PlayArrow';
import Typography from '@mui/material/Typography';
import styled from "@mui/material/styles/styled";

const PlayButton = styled(IconButton)({
  marginRight: -25
});

const Track = ({track, artistName}) => {
  const [artists, setArtists] = useState('');
  // call the formatArtistNames function and set the result to state
  useEffect(() => {
    setArtists(formatArtistNames([artistName]));
  }, [track]);

  const formatArtistNames = (artists) => {
    if (artists.length === 0) {
      return '';
    } else if (artists.length === 1) {
      return artists[0];
    } else if (artists.length === 2) {
      return `${artists[0].name} and ${artists[1].name}`;
    } else {
      return artists.reduce((acc, curr, index) => {
        if (index === artists.length - 1) {
          return `${acc} and ${curr.name}`;
        } else {
          return `${acc}, ${curr.name}`;
        }
      }, '');
    }
  };

  function formatDuration(duration) {
    const minutes = Math.floor(duration / 60000);
    const seconds = Math.floor((duration % 60000) / 1000);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }

  return (
      <ListItem sx={{
        backgroundColor: "#ececec",
        borderRadius: "5px",
        marginTop: "5px"
      }} secondaryAction={
        <ListItemText primaryTypographyProps={{style: {fontWeight: "bold"}}}
                      edge="end"/>}
      >
        <ListItemText primary={track.name} secondary={artists}/>
        <Typography variant="subtitle2">{formatDuration(
            track.duration)}</Typography>
        <PlayButton color="primary" onClick={() => window.open(track.url)}>
          <PlayArrow/>
        </PlayButton>
      </ListItem>
  );
};

export default Track;