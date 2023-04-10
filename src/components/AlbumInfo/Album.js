import React, { useState, useEffect } from 'react';
import styled from '@mui/material/styles/styled';
import { useSelector } from "react-redux";
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {
  likeAlbum,
  unlikeAlbum,
  getLikedAlbums
} from '../../services/likes-service';

import { Box, Container } from '@mui/material';

const BigText = styled(Typography)(() => ({
  fontWeight: 'bold',
  textAlign: 'center'
}));

const AlbumImage = styled('img')(({ theme }) => ({
  maxWidth: 300,
  textAlign: 'center',
  width: '100%',
  height: 'auto%'
}));

const AlbumArtist = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  textAlign: 'center'
}));

const StyledRating = styled(Rating)(({ theme }) => ({
  position: 'relative', top: 5, left: 4
}));

const Album = ({ id, name, artist, imageSrc, loading, averageRating }) => {
  const { loggedInUser, loggedIn } = useSelector(state => state.loggedInUserData);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const checkLiked = async () => {
      if (loggedIn) {
        const likedAlbums = await getLikedAlbums(loggedInUser.id);
        if (likedAlbums.some(item => item.id === id)) {
          setLiked(true);
        }
      }
    };
    checkLiked();
  }, [id, loggedIn, loggedInUser]);

  const handleClick = () => {
    if (liked) {
      unlikeAlbum({ userId: loggedInUser.id, albumId: id });
      setLiked(false);
    } else {
      likeAlbum({ userId: loggedInUser.id, albumId: id });
      // Fire off a like request here
      setLiked(true);
    }
  };

  if (loading) {
    return "Loading...";
  }

  return (
    <Container fixed>
      <BigText variant="h6">{name}
        {loggedIn && (
          <IconButton aria-label="like" onClick={handleClick}>
            {liked ? <FavoriteIcon color="error" /> :
              <FavoriteBorderIcon />}
          </IconButton>
        )}
      </BigText>
      <AlbumArtist variant="subtitle1">{artist}</AlbumArtist>
      <BigText>Average rating:
        <StyledRating size="small" readOnly value={averageRating}
          precision={0.5}
          max={5}> </StyledRating>
      </BigText>
        
      <Box sx={{mx: 'auto', maxWidth: '300px', width: '100%', height: 'auto%'}}>
        <AlbumImage src={imageSrc} alt={name} />
      </Box>
    </Container>
  );
};

export default Album;
