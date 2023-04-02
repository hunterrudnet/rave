import React from 'react';
import {styled} from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const Root = styled('div')(({theme}) => ({
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

const Album = ({name, artist, imageSrc}) => {
  return (
      <Root>
        <AlbumName variant="h6">{name}</AlbumName>
        <AlbumImage src={imageSrc} alt={name}/>
        <AlbumArtist variant="subtitle1">{artist}</AlbumArtist>
      </Root>
  );
};

export default Album;
