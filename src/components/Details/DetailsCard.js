import React from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';

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

const Rank = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 'bold',
}));

const DividerStyled = styled(Divider)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const Text = styled(Typography)(({ theme }) => ({
  backgroundColor: 'white',
  padding: theme.spacing(2),
  borderRadius: 5,
}));

function DetailsCard({album}) {

  return (
    <Root sx={{mb: 1}}>
      <Header>
        <AvatarStyled src={album.userProfilePicture} alt={album.username} />
        <Username variant="body1">
          {album.username}
        </Username>
        <Rank variant="body1">
          {album.rating}
        </Rank>
      </Header>
      <DividerStyled />
      <Text variant="body1">
        {album.review}
      </Text>
    </Root>
  );
}

export default DetailsCard;
