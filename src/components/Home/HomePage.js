import React, { useEffect, useState } from "react";
import "../Reused/reused.css";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import SeeMoreList from "../SeeMoreList/SeeMoreList.js";
import {
  getAllReviews,
  getReviewsForUserFollowings
} from "../../services/reviews-service";
import { getAllAlbums } from "../../services/album-service";
import { useSelector } from "react-redux";
import { getAllUsers } from "../../services/user-service";
import { getLikedAlbums } from "../../services/likes-service";
import ReviewsCardList from "../Reviews/ReviewsCardList";
import { getReviewHeaderDataShowAlbum } from "../Reused/ReusedFunctions";
import { LikeBadge } from "../Reused/likeBadge";
import Typography from "@mui/material/Typography";



const HomePage = () => {
  let { loggedInUser, loading, loggedIn } = useSelector(
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
    updateReviewsData(reviews.reverse());
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
    const users = await getAllUsers();
    updateUsersData(users.reverse().map(user => {
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
        <Card sx={{ borderRadius: 0 }}>
          <CardMedia
            sx={{ height: 350, maxWidth: '100%', backgroundPosition: { lg: '0px -430px', xs: 'center' } }}
            image="/images/rave-banner.jpg"
            title="Rave"
          />
          <CardContent style={
            {
              position: "absolute",
              width: '100%',
              textAlign: "center",
              padding: 5,
              mx: "auto",
              top: '81px',
              color: 'white',
              backgroundColor: "rgba(39,40,92,0.55)",
            }
          }>
            <Typography variant="h1" component="h5" sx={{ pt: 2, mx: 'auto' }}>
              Rave
            </Typography>
            <Typography variant="h4" component="h5" sx={{ pb: 2, mx: 'auto' }}>
              Build connections through the music you enjoy
            </Typography>
          </CardContent>
        </Card>
      </div>
      <Grid container spacing={2} sx={{ px: 0, pt: 2, mx: "auto" }} style={{ width: "80% " }}>
        <Grid item xs={12} md={3} sx={{ p: 0, mx: 'auto' }}>
          <SeeMoreList
            title={loggedIn ? "Your Favorite Albums" : "Popular Albums"}
            items={albumsData}
            noContentMessage={"No Albums Yet..."} />
          <SeeMoreList
            title={"Newest Members"}
            items={usersData}
            noContentMessage={"No Followers Yet..."} />
        </Grid>
        <Grid item xs={12} md={7} sx={{ p: 0, mx: 'auto' }}>
          <ReviewsCardList reviewsData={reviewsData} loading={reviewsLoading}
            getReviewHeaderData={getReviewHeaderDataShowAlbum}
            reviewsListTitle={loggedIn
              ? "Reviews From Users You Follow"
              : "Recent Reviews"} />

        </Grid>
      </Grid>
    </div >
  );
};

export default HomePage;