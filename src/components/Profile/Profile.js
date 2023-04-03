import "../Reused/reused.css";
import Grid from "@mui/material/Grid";
import UserInfo from "./UserInfo/UserInfo";
import LikedAlbums from "./UserInfo/LikedAlbums";
import Reviews from "../Reviews/Reviews";
import ImageText from "../Reused/ImageText";
import React, {useEffect, useState} from "react";
import {getReviewsForUser} from "../../services/reviews-service";

const Profile = ({loading, user, isLoggedInUser}) => {
  const [reviewsLoading, setReviewsLoading] = useState(true);
  const [reviewsData, updateReviewsData] = useState([]);

  const getReviewHeader = (review) => {
    const album = review.Album;
    return <ImageText bigText={album.name} smallText={album.artist}
                      image={album.image}/>;
  };

  const fetchReviewsData = async () => {
    const reviews = await getReviewsForUser(user.id);
    updateReviewsData(reviews);
    setReviewsLoading(false);
  };

  useEffect(() => {
    if (!loading) {
      setReviewsLoading(true);
      updateReviewsData([]);
      fetchReviewsData();
    }
  }, [loading]);

  if (loading) {
    return <div>Loading ...</div>;
  } else {
    return (
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <LikedAlbums userId={user.id}/>
          </Grid>
          <Grid item xs={0.5}/>
          <Grid item xs={7}>
            <UserInfo user={user} isLoggedInUser={isLoggedInUser}/>
            <Reviews reviews={reviewsData} loading={reviewsLoading}
                     getReviewHeader={getReviewHeader} headerText={"Reviews"}/>
          </Grid>
        </Grid>
    );
  }

};

export default Profile;