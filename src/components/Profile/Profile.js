import React, {useEffect, useState} from "react";
import "../Reused/reused.css";
import Grid from "@mui/material/Grid";
import UserInfo from "./UserInfo/UserInfo";
import LikedAlbums from "./UserInfo/LikedAlbums";
import Reviews from "../Reviews/Reviews";
import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {getReviewsForUser} from "../../services/reviews-service";
import ImageText from "../Reused/ImageText";

const Profile = () => {
  let {loggedInUser, loading, loggedIn} = useSelector(
      state => state.loggedInUserData);
  const [reviewsLoading, setReviewsLoading] = useState(true);
  const [reviewsData, updateReviewsData] = useState([]);

  const fetchReviewsData = async () => {
    const reviews = await getReviewsForUser(loggedInUser.id);
    updateReviewsData(reviews);
    setReviewsLoading(false);
  };

  const getReviewHeader = (review) => {
    const album = review.Album;
    return <ImageText bigText={album.name} smallText={album.artist}
                      image={album.image}/>;
  };

  useEffect(() => {
    if (!loading) {
      setReviewsLoading(true);
      updateReviewsData([]);
      fetchReviewsData();
    }
  }, [loading, loggedInUser, loggedIn]);

  if (loading) {
    return <div>Loading ...</div>;
  } else if (!loading && !loggedIn) {
    return <Navigate replace to={"/"}/>;
  } else {
    return (
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <LikedAlbums userId={loggedInUser.id}/>
          </Grid>
          <Grid item xs={0.5}/>
          <Grid item xs={7}>
            <UserInfo user={loggedInUser}/>
            <Reviews reviews={reviewsData} loading={reviewsLoading}
                     getReviewHeader={getReviewHeader}/>
          </Grid>
        </Grid>
    );
  }

};

export default Profile;