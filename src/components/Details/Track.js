import React, { useState } from 'react';
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { styled } from '@mui/material/styles';
import { IconButton } from '@mui/material';
import { PlayArrow } from '@mui/icons-material';

const PlayButton = styled(IconButton)({
    marginRight: -25,
  });
  
// A SeeMoreItem represents a single list item in a see more list.
//
//  Items are formed as follows:
//    -- stats: string representing statistic (e.g. rating out of ten, number of likes, number of followers, etc.)
//    -- primaryText: The main text for the item (e.g. Album name, user name, etc.)
//    -- secondaryText: optional string for subtext of the item (e.g. genre, truncated review text, etc.)
//    -- linkUrl: a url that clicking this item in the list will redirect to
//    -- imgUrl: path to image to be used for item (e.g. album artwork, profile picture, etc.)
//  Example item:
// {
//     stats: "2.1k",
//     primaryText: "Dark Side of the Moon",
//     secondaryText: "Psychedelic Rock",
//     linkUrl: "/",
//     imgUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Drake_-_Take_Care_cover.jpg/220px-Drake_-_Take_Care_cover.jpg",
// }
//
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
            <PlayButton
                color="primary"
                onClick={() => window.open(track.external_urls.spotify)}
            >
                <PlayArrow />
            </PlayButton>
        </ListItem>
    );
}