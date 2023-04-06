import React, {useState, useEffect} from 'react';
import './Details.css';
import ReviewsCardList from '../Reviews/ReviewsCardList';
import WriteReview from '../Reviews/WriteReview';
import Album from './Album';
import TrackList from './TrackList';
import {useParams} from 'react-router';
import {getAlbumBySpotifyId} from '../../services/album-service';
import {
  createOrUpdateReview,
  getReviewsForAlbum
} from '../../services/reviews-service';
import {
  getReviewHeaderDataShowUser
} from "../Reused/ReusedFunctions";
import {useSelector} from "react-redux";

const Details = () => {
  const {albumID} = useParams();
  const [album, setAlbum] = useState();
  const [albumLoading, setAlbumLoading] = useState(true);
  const [reviewsData, setReviewsData] = useState([]);
  const [reviewsLoading, setReviewsLoading] = useState(true);
  let {loggedInUser} = useSelector(state => state.loggedInUserData);

  useEffect(() => {
    if (!albumLoading && album) {
      fetchReviewsData();
    }
  }, [album, loggedInUser]);

  useEffect(() => {
    fetchAlbumBySpotifyId();
  }, []);

  const fetchReviewsData = async () => {
    setReviewsLoading(true);
    const reviews = await getReviewsForAlbum(album.id);
    console.log(reviews);
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

  if (albumLoading) {
    return <h2>Loading...</h2>;
  }

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
    let newReview = {};
    if (updatedReview) {
      let oldReview = reviewsData.find(
          review => review.id === updatedReview.id);
      newReview = {...oldReview, ...updatedReview};
      let newReviews = reviewsData.filter(
          (review) => review.id !== updatedReview.id);
      newReviews.push(newReview);
      setReviewsData(newReviews);
    }

    return newReview;
  };

  return (
      <div className="grid-container">
        <div className="top-left">
          <Album id={album.id} name={album.name} artist={album.artist.name}
                 imageSrc={album.images[0].url}/>
        </div>
        <div className="top-right">
          <WriteReview albumName={album.name} albumIDFromDB={album.id}
                       loggedInUserId={loggedInUser.id}
                       reviewsLen={reviewsData.length}
                       submitReview={(reviewData) => handleSubmitReview(
                           reviewData)}/>
        </div>
        <div className="bottom-left">
          <h3>{"Songs"}</h3>
          <TrackList tracks={album.tracks} artistName={album.artist.name}/>
        </div>
        <div className="bottom-right">
          <ReviewsCardList reviewsData={reviewsData} loading={reviewsLoading}
                           getReviewHeaderData={getReviewHeaderDataShowUser}
                           reviewsListTitle={`Reviews for ${album.name} by ${album.artist.name}`}
                           setReviewsData={setReviewsData}/>
        </div>
      </div>
  );
};

export default Details;
