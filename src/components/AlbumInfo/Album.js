import React, {useState, useEffect} from 'react';
import styled from '@mui/material/styles/styled';
import {useSelector} from "react-redux";
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
import {getAverageReviewScoreByAlbumId} from '../../services/album-service';

const Root = styled('div')(() => ({
  display: 'flex',
  position: 'absolute',
  flexDirection: 'column',
  alignItems: 'center'
}));

const AlbumName = styled(Typography)(({theme}) => ({
  fontWeight: 'bold',
  marginBottom: theme.spacing(1),
  textAlign: 'center'
}));

const AlbumImage = styled('img')(({theme}) => ({
  marginBottom: theme.spacing(1),
  width: 450,
  height: 'auto'
}));

const AlbumArtist = styled(Typography)(({theme}) => ({
  color: theme.palette.text.secondary,
  textAlign: 'center'
}));

const StyledRating = styled(Rating)(({}) => ({
  position: "center"
}));

const Album = ({id, name, artist, imageSrc}) => {
  const {loggedInUser, loggedIn} = useSelector(state => state.loggedInUserData);
  const [liked, setLiked] = useState(false);
  const [averageRating, setAverageRating] = useState(null);

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

    const getRating = async () => {
      const rating = await getAverageReviewScoreByAlbumId(id);
      setAverageRating(rating.averageScore);
    };
    getRating();
  }, [id, loggedIn, loggedInUser]);

  const handleClick = () => {
    if (liked) {
      unlikeAlbum({userId: loggedInUser.id, albumId: id});
      setLiked(false);
    } else {
      likeAlbum({userId: loggedInUser.id, albumId: id});
      // Fire off a like request here
      setLiked(true);
    }
  };

  return (
      <Root>
        <AlbumName variant="h6">{name}
          {loggedIn && (
              <IconButton aria-label="like" onClick={handleClick}>
                {liked ? <FavoriteIcon color="error"/> :
                    <FavoriteBorderIcon/>}
              </IconButton>
          )}
        </AlbumName>
        <h3>Average score:
          <StyledRating readOnly value={averageRating} precision={0.5}
                        max={5}> </StyledRating>
        </h3>

        <AlbumImage src={imageSrc} alt={name}/>
        <AlbumArtist variant="subtitle1">{artist}</AlbumArtist>
      </Root>
  );
};

export default Album;
