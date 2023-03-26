import React, { useState } from 'react';
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { styled } from '@mui/material/styles';
import { IconButton } from '@mui/material';
import { PlayArrow } from '@mui/icons-material';
import Typography from '@mui/material/Typography';

const PlayButton = styled(IconButton)({
    marginRight: -25,
  });

export default function Track({track, stats, imgUrl, linkUrl, primaryText, secondaryText, visible, name}) {
    const [artists, setArtists] = useState('');

    const formatArtistNames = (artists) => {
        if (artists.length === 0) {
          return '';
        } else if (artists.length === 1) {
          return artists[0].name;
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
      

    // call the formatArtistNames function and set the result to state
     useState(() => {
        setArtists(formatArtistNames(track.artists));
    }, [track]);

    return (
        <ListItem  href={linkUrl} sx={{ backgroundColor: "#ececec", borderRadius: "5px", marginTop: "5px" }}
                  secondaryAction={
                      <ListItemText primaryTypographyProps={{ style: {fontWeight: "bold"} }} edge="end" primary={ stats } />
                  }
        >
            <ListItemText
                primary={track.name}
                secondary={artists}
            />
            <Typography variant="subtitle2">{formatDuration(track.duration_ms)}</Typography>
            <PlayButton
                color="primary"
                onClick={() => window.open(track.external_urls.spotify)}
            >
                <PlayArrow />
            </PlayButton>
        </ListItem>
    );
}