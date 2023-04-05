import "../Reused/reused.css";
import Grid from "@mui/material/Grid";
import UserInfo from "./UserInfo/UserInfo";
import LikedAlbums from "./UserInfo/LikedAlbums";
import React, {useEffect, useState} from "react";
import {getReviewsForUser} from "../../services/reviews-service";
import ReviewsCardList from "../Reviews/ReviewsCardList";

const Profile = ({loading, user}) => {
  const [reviewsLoading, setReviewsLoading] = useState(true);
  const [reviewsData, updateReviewsData] = useState([]);

  const getReviewHeaderData = (review) => ({
    image: review.Album.image,
    alt: review.Album.name,
    link: `/details/${review.Album.spotifyId}`,
    topText: review.Album.name,
    bottomText: review.Album.artist
  });

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
            <UserInfo user={user}/>
            <ReviewsCardList reviews={reviewsData} loading={reviewsLoading}
                             getReviewHeaderData={getReviewHeaderData}/>
          </Grid>
        </Grid>
    );
  }

};

export default Profile;