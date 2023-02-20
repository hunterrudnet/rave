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

export default function DetailsCard({ album }) {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex', m: 2, borderRadius: '16px'}}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardMedia
              component={"img"}
              sx={{width: 151}}
              image={album.userProfilePicture}
              alt="Something"
              />
            <Typography component="div" variant="h5">
              {album.username} 
            </Typography>
        <Card sx={{ display: 'flex', m: 2, borderRadius: '16px'}}>
        <Box sx={{ display: 'flex', pl: 1, pb: 1 }}>
            <CardMedia
                component={"img"}
                sx={{width: 151}}
                image={album.image}
                alt="Something"
            />
            <Typography component="div" variant="h5">
            {album.name} - {album.artist} - {album.rating}  
            <Typography component="div" variant="body1">
            {album.review} 
            </Typography>
            </Typography>
        </Box>
        </Card>
      </Box>
    </Card>
  );
}