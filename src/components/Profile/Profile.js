import React, {useEffect, useState} from "react";
import "../Reused/reused.css";
import UserInfo from "./UserInfo/UserInfo";
import Grid from "@mui/material/Grid";
import FavoriteAlbums from "./FavoriteAlbums/FavoriteAlbums";
import Reviews from "../Reviews/Reviews";
import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {getReviewsForUser} from "../../services/reviews-service";

const Profile = () => {
  let {loggedInUser, loading} = useSelector(state => state.loggedInUserData);
  const [reviewsLoading, setLoading] = useState(true);
  const [reviewsData, updateReviewsData] = useState([]);

  const fetchReviewsData = async () => {
    const reviews = await getReviewsForUser(loggedInUser.id);
    updateReviewsData(reviews);
    setLoading(false);
  };

  useEffect(() => {
    if (!loading) {
      setLoading(true);
      updateReviewsData([]);
      fetchReviewsData();
      console.log(loggedInUser);
    }
  }, [loading, loggedInUser]);

  if (loading) {
    return <div>Loading ...</div>;
  } else if (loggedInUser === undefined) {
    return <Navigate replace to={"/"}/>;
  } else {
    return (
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <FavoriteAlbums userId={loggedInUser.id}/>
          </Grid>
          <Grid item xs={0.5}/>
          <Grid item xs={7}>
            <UserInfo user={loggedInUser}/>
            <Reviews reviews={reviewsData} loading={reviewsLoading}/>
          </Grid>
        </Grid>
    );
  }

};

export default Profile;