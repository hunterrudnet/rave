import React, { useState, useEffect } from 'react';
import './Details.css';
import DetailsCardList from './DetailsCardList';
import WriteReview from './WriteReview';
import Album from './Album';
import songData from '../TestData/songData.json'
import TrackList from './TrackList';
import { useParams } from 'react-router';
import testReviews from '../TestData/testReviews.json'
import { getAlbumBySpotifyId } from '../../services/album-service';

function Details() {
    const { albumID } = useParams();
    const [artists, setArtists] = useState('');
    const [album, setAlbum] = useState();
    const [shouldFetch, setShouldFetch] = useState(true);

    const formatArtistNames = (artists) => {
      if (artists.length === 0) {
        return '';
      } else if (artists.length === 1) {
        return artists[0].name;
      } else if (artists.length === 2) {
        return `${artists[0].name} and ${artists[1].name}`;
      } else {
        return artists.reduce((acc, curr, index) => {
          if (index === artists.length - 1) {
            return `${acc} and ${curr.name}`;
          } else {
            return `${acc}, ${curr.name}`;
          }
        }, '');
      }
    };

    async function fetchAlbumBySpotifyId() {
      const foundAlbum = await getAlbumBySpotifyId(albumID);
      if (foundAlbum) {
        setAlbum(foundAlbum);
        setArtists(formatArtistNames([album.artist]));
        setShouldFetch(false);
      }
    }

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
            <Album name={album.name} artist={album.artist.name} imageSrc={album.images[0].url}/>
          </div>
          <div className="top-right">
            <WriteReview albumName={album.name} albumIDFromDB={album.id}/>
          </div>
          <div className="bottom-left">
          <h3>{"Songs"}</h3>
            <TrackList tracks={album.tracks} artistName={album.artist.name} />
          </div>
          <div className="bottom-right">
            <h3>{`Reviews for ${album.name} by ${artists}`}</h3>
                <DetailsCardList reviews={testReviews} />
          </div>
        </div>
      );
  };

export default Details;
