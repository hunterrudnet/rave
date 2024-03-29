import {Link} from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import '@fontsource/roboto/300.css';

const SearchExpandedCard = ({album}) => {

  const handleClick = (event) => {
    event.stopPropagation();
  };

  return (
      <Card sx={{
        display: 'flex',
        m: 2,
        backgroundColor: '#ececec',
        borderRadius: 10,
        textDecoration: 'none'
      }} component={Link} to={`/details/${album.spotifyId}`}>
        <CardContent sx={{flex: '1 0 auto'}}>
          <Typography component="div" variant="h5">
            {album.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary"
                      component="div">
            {album.artist}
          </Typography>
          <Box sx={{display: 'flex', alignItems: 'center', pl: 1, pb: 1}}>
            <Link to={album.url} target="_blank" rel="noopener noreferrer">
              <IconButton aria-label="play/pause" onClick={handleClick}>
                <PlayArrowIcon sx={{height: 38, width: 38}}/>
                <Typography variant="subtitle1" color="text.secondary"
                            component="div">
                  Play on Spotify
                </Typography>
              </IconButton>
            </Link>
          </Box>
        </CardContent>
        <Box sx={{
          position: 'relative',
          width: 151,
          height: '100%',
          display: 'flex',
          alignItems: 'center'
        }}>
          <CardMedia
              component="img"
              sx={{
                position: 'absolute',
                top: 0,
                p: 1,
                right: 0,
                bottom: 0,
                left: 0,
                objectFit: 'cover',
                borderRadius: 10
              }}
              image={album.image}
              alt="Album cover image information"
          />
        </Box>
      </Card>
  );
};

export default SearchExpandedCard;
