import React, { useState, useEffect } from 'react';
import './Details.css';
import ReviewsCardList from '../Reviews/ReviewsCardList';
import WriteReview from '../Reviews/WriteReview';
import Album from './Album';
import TrackList from './TrackList';
import { useParams } from 'react-router';
import { getAlbumBySpotifyId } from '../../services/album-service';
import {
  createOrUpdateReview,
  getReviewsForAlbum
} from '../../services/reviews-service';
import {
  getReviewHeaderDataShowUser, handleDeleteGeneral
} from "../Reused/ReusedFunctions";
import { useSelector } from "react-redux";
import { getAverageReviewScoreByAlbumId } from "../../services/album-service";
import Grid from "@mui/material/Grid";
import { Typography } from '@mui/material';


const Details = () => {
  const { albumID } = useParams();
  const [album, setAlbum] = useState({ artist: {}, images: [{}], tracks: [{}] });
  const [albumLoading, setAlbumLoading] = useState(true);
  const [reviewsData, setReviewsData] = useState([]);
  const [reviewsLoading, setReviewsLoading] = useState(true);
  const [averageRating, setAverageRating] = useState(0);
  let { loggedInUser } = useSelector(state => state.loggedInUserData);

  useEffect(() => {
    if (!albumLoading && album) {
      fetchReviewsData();
    }
  }, [album, loggedInUser]);

  useEffect(() => {
    fetchAlbumBySpotifyId();
  }, []);

  useEffect(() => {
    fetchAverageRating();
  }, [reviewsData]);

  const fetchAverageRating = async () => {
    const rating = await getAverageReviewScoreByAlbumId(album.id);
    setAverageRating(rating.averageScore);
  };

  const fetchReviewsData = async () => {
    setReviewsLoading(true);
    const reviews = await getReviewsForAlbum(album.id);
    setReviewsData(reviews);
    setReviewsLoading(false);
  };

  const fetchAlbumBySpotifyId = async () => {
    const foundAlbum = await getAlbumBySpotifyId(albumID);
    if (foundAlbum) {
      setAlbum(foundAlbum);
      setAlbumLoading(false);
    }
  };

  if (!album && !albumLoading) {
    return <h2>Album not found</h2>;
  }

  const handleSubmitReview = async (reviewData) => {
    const review = {
      userId: loggedInUser.id,
      albumId: album.id,
      score: reviewData.score,
      reviewText: reviewData.reviewText
    };
    const updatedReview = await createOrUpdateReview(review);
    await fetchAverageRating();
    let newReview = {};
    if (updatedReview) {
      let oldReview = reviewsData.find(
        review => review.id === updatedReview.id);
      newReview = { ...oldReview, ...updatedReview };
      let newReviews = reviewsData.filter(
        (review) => review.id !== updatedReview.id);
      newReviews.push(newReview);
      setReviewsData(newReviews);
    }
    return newReview;
  };

  const handleDelete = async (id) => {
    await handleDeleteGeneral(id, reviewsData, setReviewsData);
    await fetchAverageRating();
  };


  return (
    <Grid container sx={{mx: 'auto', width: {xs: '90%', md: '80%'}, mt: 5}}>
      <Grid item xs={12} md={5} lg={4} sx={{pr: {md: 2, lg: 4}}}>
        <Grid container >
          <Grid item xs={12} md={12}>
            <Album id={album.id} name={album.name} artist={album.artist.name}
            imageSrc={album.images[0].url} loading={albumLoading}
            averageRating={averageRating} />
        </Grid>
        <Grid item xs={12} md={12} sx={{mt: {xs:'10px'}, mx: 'auto'}}>
          <TrackList tracks={album.tracks} artistName={album.artist.name} />
        </Grid>
      </Grid>
      </Grid>
      <Grid item  xs={12} md={7} lg={8}>
      <Grid container>
        <Grid item xs={12} md={12} sx={{mt: {xs:'10px'}}}>
          <WriteReview albumName={album.name} albumIDFromDB={album.id}
            loggedInUserId={loggedInUser.id}
            reviewsLen={reviewsData.length}
            submitReview={(reviewData) => handleSubmitReview(
              reviewData)} />
          <Grid item xs={12} md={12} sx={{mt: {md: '115px', xs:'10px'}}}>
            <ReviewsCardList reviewsData={reviewsData} loading={reviewsLoading}
              getReviewHeaderData={getReviewHeaderDataShowUser}
              reviewsListTitle={`Reviews for ${album.name} by ${album.artist.name}`}
              setReviewsData={setReviewsData}
              handleDelete={handleDelete} />
          </Grid>
        </Grid>
      </Grid>
      </Grid>
    </Grid>
  );
};

export default Details;
