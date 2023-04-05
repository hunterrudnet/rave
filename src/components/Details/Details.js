import React, {useState, useEffect} from 'react';
import './Details.css';
import ReviewsCardList from '../Reviews/ReviewsCardList';
import WriteReview from '../Reviews/WriteReview';
import Album from './Album';
import TrackList from './TrackList';
import {useParams} from 'react-router';
import {getAlbumBySpotifyId} from '../../services/album-service';
import {getReviewsForAlbum} from '../../services/reviews-service';
import {
  getReviewHeaderDataShowUser,
  reviewsForAlbumListTitle
} from "../Reused/GetReviewsHeaderData";

function Details() {
  const {albumID} = useParams();
  const [album, setAlbum] = useState();
  const [albumLoading, setAlbumLoading] = useState(true);
  const [reviewsData, setReviewsData] = useState([]);
  const [reviewsLoading, setReviewsLoading] = useState(true);

  const fetchReviewsData = async () => {
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

  useEffect(() => {
    if (!albumLoading && album) {
      setReviewsLoading(true);
      fetchReviewsData();
    }
  }, [album]);

  useEffect(() => {
    fetchAlbumBySpotifyId();
  }, []);

  if (albumLoading) {
    return <h2>Loading...</h2>;
  }

  if (!album && !albumLoading) {
    return <h2>Album not found</h2>;
  }

  return (
      <div className="grid-container">
        <div className="top-left">
          <Album id={album.id} name={album.name} artist={album.artist.name}
                 imageSrc={album.images[0].url}/>
        </div>
        <div className="top-right">
          <WriteReview albumName={album.name} albumIDFromDB={album.id}/>
        </div>
        <div className="bottom-left">
          <h3>{"Songs"}</h3>
          <TrackList tracks={album.tracks} artistName={album.artist.name}/>
        </div>
        <div className="bottom-right">
          <ReviewsCardList reviews={reviewsData} loading={reviewsLoading}
                           getReviewHeaderData={getReviewHeaderDataShowUser}
                           reviewsListTitle={`Reviews for ${album.name} by ${album.artist.name}`}/>
        </div>
      </div>
  );
}

export default Details;
