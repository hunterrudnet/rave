import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import FavoriteIcon from '@mui/icons-material/Favorite';
import '@fontsource/roboto/300.css';

export default function SearchExpandedCard({ album }) {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex', m: 2, borderRadius: '16px'}}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent>
          <Typography component="div" variant="h5">
            {album.name} - {album.artist} 
            {album.attributes.map((attribute) => (
              <Typography display='inline' bgcolor='lightgrey' sx={{ p:.3, m: 1, borderRadius: '16px', border: '1px solid grey', color: theme.palette.text.secondary }}>{attribute}</Typography>
            ))}
            <IconButton aria-label="add to favorites">
            <FavoriteIcon sx={{ pl: 8, height: 38, width: 38 }}/>
          </IconButton>
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', pl: 1, pb: 1 }}>
          <IconButton aria-label="play/pause" href={album.url}>
            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
            <Typography variant="subtitle1" color="text.secondary" component="div">
              <a href="https://spotify.com/">Play on Spotify</a>
          </Typography>
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
}