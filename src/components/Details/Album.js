import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { useSelector } from "react-redux";
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import  { likeAlbum, unlikeAlbum, getLikedAlbums } from '../../services/likes-service';

const Root = styled('div')(({ theme }) => ({
  display: 'flex',
  position: 'absolute',
  flexDirection: 'column',
  alignItems: 'center',
}));

const AlbumName = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  marginBottom: theme.spacing(1),
  textAlign: 'center',
}));

const AlbumImage = styled('img')(({ theme }) => ({
  marginBottom: theme.spacing(1),
  width: 450,
  height: 'auto',
}));

const AlbumArtist = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  textAlign: 'center',
}));

function Album({id, name, artist, imageSrc}) {
  const { loggedInUser, loggedIn } = useSelector(state => state.loggedInUserData);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const checkLiked = async () => {
      if (loggedIn) {
        const likedAlbums = await getLikedAlbums(loggedInUser.id);
        console.log(id);
        console.log(likedAlbums)
        if (likedAlbums.some(item => item.id === id)) {
          setLiked(true);
        }
      }
    };
    checkLiked();
  }, [id, loggedIn]);

  const handleClick = () => {
    if (liked) {
      unlikeAlbum({userId: loggedInUser.id, albumId: id})
      setLiked(false);
      return;
    } else {
      likeAlbum({userId: loggedInUser.id, albumId: id})
      // Fire off a like request here
      setLiked(true);
    }
  };

  return (
    <Root>
      <AlbumName variant="h6">{name}</AlbumName>
      {loggedIn && (
        <IconButton aria-label="like" onClick={handleClick}>
          {liked ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
        </IconButton>
      )}
      <AlbumImage src={imageSrc} alt={name} />
      <AlbumArtist variant="subtitle1">{artist}</AlbumArtist>
    </Root>
  );
}

export default Album;
