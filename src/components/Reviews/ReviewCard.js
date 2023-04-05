import React from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import {Link} from 'react-router-dom';
import Rating from '@mui/material/Rating';
import styled from "@mui/material/styles/styled";

const Root = styled(Box)(({theme}) => ({
  backgroundColor: '#ececec', padding: theme.spacing(2), borderRadius: 10
}));

const Header = styled('div')(({theme}) => ({
  display: 'flex', alignItems: 'center', marginBottom: theme.spacing(2)
}));

const AvatarStyled = styled(Avatar)(({theme}) => ({
  marginRight: theme.spacing(2)
}));

const HeaderTextTop = styled(Typography)(({theme}) => ({
  fontWeight: 'bold', marginRight: theme.spacing(2)
}));

const HeaderTextBottom = styled(Typography)(({theme}) => ({
  fontWeight: 'normal', marginRight: theme.spacing(2)
}));

const DividerStyled = styled(Divider)(({theme}) => ({
  marginBottom: theme.spacing(2)
}));

const Text = styled(Typography)(({theme}) => ({
  backgroundColor: 'white', padding: theme.spacing(2), borderRadius: 5
}));

const StyledRating = styled(Rating)(() => ({
  position: 'absolute', right: "1%"
}));

const ReviewCard = ({
  image,
  alt,
  link,
  score,
  topText,
  bottomText,
  reviewText
}) => {
  return (<Root sx={{mb: 1, textDecoration: 'none'}}>
    <Link to={link} style={{textDecoration: 'none', color: "black"}}>
      <Header>
        <AvatarStyled src={image} alt={alt}/>
        <div>
          <HeaderTextTop variant="body1">{topText}</HeaderTextTop>
          <HeaderTextBottom variant="body2">{bottomText}</HeaderTextBottom>
        </div>
        <StyledRating name="rating" value={score} max={5} readOnly
                      precision={0.5}/>
      </Header>
      <DividerStyled/>
      <Text variant="body1">{reviewText}</Text>
    </Link>
  </Root>);
};

export default ReviewCard;
