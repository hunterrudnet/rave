import React, { useState } from 'react';
import './Details.css';
import DetailsCardList from './DetailsCardList';
import WriteReview from './WriteReview';
import Album from './Album';
import songData from '../TestData/songData.json'
import TrackList from './TrackList';
import albumData from '../TestData/albumData.json';
import { useParams } from 'react-router';
import testReviews from '../TestData/testReviews.json'

function Details() {
    const [artists, setArtists] = useState('');
    const [foundAlbum, setFoundAlbum] = useState(false);
    const [album, setAlbum] = useState(albumData);
    const { albumID } = useParams();

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

    useState(() => {
        console.log(albumID);
        if (albumID === albumData.id) {
            setAlbum(albumData);
            console.log(album);
            setFoundAlbum(true);
            setArtists(formatArtistNames(albumData.artists));
            console.log(album.name);
        } else {
            setFoundAlbum(false);
        }    
    }, [album, albumID]);

  if (!foundAlbum) {
    return (
        <h2>Invalid Album ID</h2>
    );
  } else {
    return (
        <div className="grid-container">
          <div className="top-left">
            <Album name={album.name} artist={artists} imageSrc={album.images[0].url}/>
          </div>
          <div className="top-right">
            <WriteReview albumName={album.name}/>
          </div>
          <div className="bottom-left">
          <h3>{"Songs"}</h3>
            <TrackList tracks={songData.items} />
          </div>
          <div className="bottom-right">
            <h3>{`Reviews for ${album.name} by ${artists}`}</h3>
                <DetailsCardList reviews={testReviews} />
          </div>
        </div>
      );
  }
}

export default Details;
