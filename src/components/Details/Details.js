import React, { useState } from 'react';
import './Details.css';
import DetailsCardList from './DetailsCardList';
import WriteReview from './WriteReview';
import Album from './Album';
import songData from '../TestData/songData.json'
import TrackList from './TrackList';

function Details({album}) {

    const [artists, setArtists] = useState('');

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

  const reviews = [
    {
    "username": "HunterKicks",
    "userProfilePicture": "https://www.pngfind.com/pngs/m/488-4887957_facebook-teerasej-profile-ball-circle-circular-profile-picture.png",
    "rating": "4.5",
    "review": "Really good album, bababababa",
    },
    {
    "username": "KickMe1235",
    "userProfilePicture": "https://www.coachcarson.com/wp-content/uploads/2018/09/Chad-Profile-pic-circle.png",
    "rating": "5",
    "review": "Really great album, bababababa",
    },
    {
    "username": "PhishHammer",
    "userProfilePicture": "https://www.mockofun.com/wp-content/uploads/2019/12/circle-photo.jpg",
    "rating": "2.5",
    "review": "Really mid album, bababababa",
    }
  ];

    // call the formatArtistNames function and set the result to state
    useState(() => {
        setArtists(formatArtistNames(album.artists));
    }, [album]);

    
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
            <DetailsCardList reviews={reviews} />
      </div>
    </div>
  );
}

export default Details;
