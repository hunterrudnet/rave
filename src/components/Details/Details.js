import React, { useState, useEffect} from 'react';
import './Details.css';
import DetailsCardList from './DetailsCardList';
import WriteReview from './WriteReview';
import Album from './Album';
import TrackList from './TrackList';
import { useParams } from 'react-router';
import {useSelector} from "react-redux";
import testReviews from '../TestData/testReviews.json'
import { getAlbumBySpotifyId } from '../../services/album-service';
import { getReviewsForAlbum } from '../../services/reviews-service';

function Details() {
    const { albumID } = useParams();
    const [album, setAlbum] = useState();
    const [shouldFetch, setShouldFetch] = useState(true);
    const [reviewsData, updateReviewsData] = useState([]);
    const [reviewsLoading, setReviewsLoading] = useState(true);
    let {loggedInUser, loading, loggedIn} = useSelector(state => state.loggedInUserData);

    const fetchReviewsData = async () => {
      console.log(album.id);
      const reviews = await getReviewsForAlbum(album.id);
      console.log(reviews);
      updateReviewsData(reviews);
      setReviewsLoading(false);
  };


    async function fetchAlbumBySpotifyId() {
      const foundAlbum = await getAlbumBySpotifyId(albumID);
      if (foundAlbum) {
        setAlbum(foundAlbum);
        setShouldFetch(false);
      }
    }

    useEffect(() => {
      if (!loading && album) {
          setReviewsLoading(true);
          fetchReviewsData();
      }
  }, [loading, loggedIn, album]);

    useEffect(() => {

      if (shouldFetch) {
        fetchAlbumBySpotifyId();
      }
    }, [])

    if (!album) {
      return <h2>Album not found</h2>
    }

    return (
        <div className="grid-container">
          <div className="top-left">
            <Album id={album.id} name={album.name} artist={album.artist.name} imageSrc={album.images[0].url}/>
          </div>
          <div className="top-right">
            <WriteReview albumName={album.name} albumIDFromDB={album.id}/>
          </div>
          <div className="bottom-left">
          <h3>{"Songs"}</h3>
            <TrackList tracks={album.tracks} artistName={album.artist.name} />
          </div>
          <div className="bottom-right">
            <h3>{`Reviews for ${album.name} by ${album.artist.name}`}</h3>
                <DetailsCardList reviews={reviewsData} />
          </div>
        </div>
      );
  };

export default Details;
