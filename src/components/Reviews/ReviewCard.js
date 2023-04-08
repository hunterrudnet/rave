import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import {Link} from 'react-router-dom';
import Rating from '@mui/material/Rating';
import styled from "@mui/material/styles/styled";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from "@mui/material/IconButton";
import {red} from "@mui/material/colors";
import "../Reused/reused.css";
import Container from "@mui/material/Container";

const Root = styled(Box)(({theme}) => ({
  backgroundColor: '#ececec', padding: theme.spacing(2), borderRadius: 10
}));

const Header = styled(Container)(({theme}) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
  paddingLeft: 0
}));

const AvatarStyled = styled(Avatar)(({theme}) => ({
  marginRight: theme.spacing(2),
  paddingLeft: 0,
  paddingRight: 0
}));

const HeaderTextTop = styled(Typography)(({theme}) => ({
  fontWeight: 'bold', marginRight: theme.spacing(1)
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
  position: 'absolute', right: "15px"
}));

const DeleteReviewIcon = styled(IconButton)(() => ({
  color: red[500], float: "right"
}));

const ReviewCard = ({
  image,
  alt,
  link,
  score,
  topText,
  reviewText,
  canDelete,
  handleDelete
}) => {
  return (<Root sx={{mb: 1, pb: 5, textDecoration: 'none', ml: 0, mr: 0,}}>
    <Header component={Link} to={link} className="link-no-decoration">
      <AvatarStyled src={image} alt={alt}/>
      <div>
        <HeaderTextTop variant="body1">{topText}</HeaderTextTop>
      </div>
      <StyledRating name="rating" value={score} max={5} readOnly
                    precision={0.5}/>
    </Header>
    <DividerStyled/>
    <Text variant="body1">{reviewText}</Text>
    {canDelete && (<DeleteReviewIcon edge="end" aria-label="delete"
                                     onClick={() => handleDelete()}>
      <DeleteIcon/>
    </DeleteReviewIcon>)}
  </Root>);
};

export default ReviewCard;
