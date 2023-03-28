import React from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import { Rating } from '@mui/material';

const Root = styled(Box)(({ theme }) => ({
  backgroundColor: '#ececec',
  padding: theme.spacing(2),
  borderRadius: 10,
}));

const Header = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
}));

const AvatarStyled = styled(Avatar)(({ theme }) => ({
  marginRight: theme.spacing(2),
}));

const Username = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  marginRight: theme.spacing(2),
}));

const DividerStyled = styled(Divider)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const Text = styled(Typography)(({ theme }) => ({
  backgroundColor: 'white',
  padding: theme.spacing(2),
  borderRadius: 5,
}));

const StyledRating = styled(Rating)(({ theme }) => ({
  position: 'absolute',
  right: "1%",
}));

function DetailsCard({album}) {

  return (
    <Root sx={{mb: 1}}>
      <Header>
        <AvatarStyled src={album.userProfilePicture} alt={album.username} />
        <Username variant="body1">
          {album.username}
        </Username>
      <StyledRating name="rating" value={album.rating} max={5} readOnly precision={0.5}/>
      </Header>
      <DividerStyled />
      <Text variant="body1">
        {album.review}
      </Text>
    </Root>
  );
}

export default DetailsCard;