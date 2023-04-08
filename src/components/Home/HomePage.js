import React, {useEffect, useState} from "react";
import "../Reused/reused.css";
import Badge from "@mui/material/Badge";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import SeeMoreList from "../SeeMoreList/SeeMoreList.js";
import {
  getAllReviews,
  getReviewsForUserFollowings
} from "../../services/reviews-service";
import {getAllAlbums} from "../../services/album-service";
import {useSelector} from "react-redux";
import FavoriteIcon from '@mui/icons-material/Favorite';
import {getAllUsers} from "../../services/user-service";
import {getWhoFollowsUser} from "../../services/following-service";
import {getLikedAlbums} from "../../services/likes-service";
import ReviewsCardList from "../Reviews/ReviewsCardList";
import {getReviewHeaderDataShowAlbum} from "../Reused/ReusedFunctions";
import {red} from "@mui/material/colors";

const LikeBadge = (count) => {
  return (
      <Badge badgeContent={count} color="primary">
        <FavoriteIcon style={{color: red[500]}}/>
      </Badge>
  );
};

const HomePage = () => {
  // const {isAuthenticated, isLoading} = useAuth0();
  let {loggedInUser, loading, loggedIn} = useSelector(
      state => state.loggedInUserData);
  const [reviewsData, updateReviewsData] = useState([]);
  const [albumsData, updateAlbumsData] = useState([]);
  const [usersData, updateUsersData] = useState([]);
  const [reviewsLoading, setReviewsLoading] = useState(true);

  const fetchReviewsData = async () => {
    let reviews;
    if (loggedIn) {
      reviews = await getReviewsForUserFollowings(loggedInUser.id);
    } else {
      reviews = await getAllReviews();
    }
    updateReviewsData(reviews);
    setReviewsLoading(false);
  };

  const fetchAlbumsData = async () => {
    let albums;
    if (loggedIn) {
      albums = await getLikedAlbums(loggedInUser.id);
    } else {
      albums = await getAllAlbums();
    }

    updateAlbumsData(albums.map(album => {
      return {
        imgUrl: album.image,
        stats: LikeBadge(album.likesCount),
        primaryText: album.name,
        secondaryText: album.artist,
        linkUrl: "/details/" + album.spotifyId
      };
    }));
  };

  const fetchUsersData = async () => {
    let users;
    if (loggedIn) {
      users = await getWhoFollowsUser(loggedInUser.id);
    } else {
      users = await getAllUsers();
    }
    updateUsersData(users.map(user => {
      return {
        imgUrl: user.image,
        primaryText: user.username,
        linkUrl: "/profile/" + user.username
      };
    }));
  };

  useEffect(() => {
    if (!loading) {
      setReviewsLoading(true);
      updateReviewsData([]);
      updateAlbumsData([]);
      updateUsersData([]);
      fetchAlbumsData();
      fetchReviewsData();
      fetchUsersData();
    }
  }, [loading, loggedIn]);

  if (loading) {
    return <div>Loading ...</div>;
  }
  return (
      <div>
        <div>
          <Card>
            <CardMedia
                style={{height: 350, maxWidth: '100%'}}
                image="/images/rave-banner.jpg"
                title="Rave"
            />
            <CardContent style={
              {
                position: "absolute",
                width: '100%',
                top: '125px',
                color: 'white',
                textAlign: "center",
                padding: 5
              }
            }>
              <CardMedia
                  component="img"
                  sx={{
                    position: "relative",
                    top: 0,
                    p: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    width: "300px",
                    borderRadius: 1,
                    mx: "auto"
                  }}
                  image="/images/rave-logo.jpg"
                  alt="logo"
              />
            </CardContent>
          </Card>
        </div>
        <Grid container spacing={2} sx={{px: 0, pt: 2, mx: "auto"}} style={{width: "80% "}}>
          <Grid item xs={12} md={3} sx={{p: 0, mx: 'auto'}}>
            <SeeMoreList
                title={loggedIn ? "Your Favorite Albums" : "Popular Albums"}
                items={albumsData}
                noContentMessage={"No Albums Yet..."}/>
            <SeeMoreList
                title={loggedIn ? "Newest Followers" : "Newest Members"}
                items={usersData}
                noContentMessage={"No Followers Yet..."}/>
          </Grid>
          <Grid item xs={12} md={7} sx={{p: 0, mx: 'auto'}}>
            <ReviewsCardList reviewsData={reviewsData} loading={reviewsLoading}
                             getReviewHeaderData={getReviewHeaderDataShowAlbum}
                             reviewsListTitle={loggedIn
                                 ? "Reviews From Users You Follow"
                                 : "Recent Reviews"}/>

          </Grid>
        </Grid>
      </div>
  );
};

export default HomePage;