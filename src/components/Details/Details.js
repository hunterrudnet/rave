import React from 'react';
import SeeMoreList from '../SeeMoreList/SeeMoreList.tsx';
import './Details.css';
import { SEE_MORE_MOCK_DATA } from '../TestData/seeMoreMockData.tsx';
import DetailsCardList from './DetailsCardList';
import WriteReview from './WriteReview';
import Album from './Album';
import songData from '../TestData/songData.json'
import Track from './Track';
import TrackList from './TrackList';

function Details() {
  const props = {
    title: "",
    items: SEE_MORE_MOCK_DATA
  }

  console.log(songData.items);

  const albums = [
    {
    "artist": "Drake",
    "name": "Nothing Was The Same (Deluxe)",
    "attributes": ["rap", "hip-hop", "pop"],
    "url": "https://open.spotify.com/album/5mz0mJxb80gqJIcRf9LGHJ?autoplay=true",
    "image": "https://m.media-amazon.com/images/I/41aLMoRW0HL.jpg",
    "username": "Username1",
    "userProfilePicture": "https://www.pngfind.com/pngs/m/488-4887957_facebook-teerasej-profile-ball-circle-circular-profile-picture.png",
    "rating": "9/10",
    "review": "Really good album, bababababa",
    },
    {
    "artist": "Drake",
    "name": "Take Care",
    "attributes": ["rap", "hip-hop", "pop"],
    "url": "https://open.spotify.com/album/1NnHBcTambfGZzT0yXL9Wc?autoplay=true",
    "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Drake_-_Take_Care_cover.jpg/220px-Drake_-_Take_Care_cover.jpg",
    "username": "Username2",
    "userProfilePicture": "https://www.coachcarson.com/wp-content/uploads/2018/09/Chad-Profile-pic-circle.png",
    "rating": "10/10",
    "review": "Really great album, bababababa",
    },
    {
    "artist": "Drake",
    "name": "Scorpion",
    "attributes": ["rap", "hip-hop", "pop"],
    "url": "https://open.spotify.com/album/1ATL5GLyefJaxhQzSPVrLX?autoplay=true",
    "image": "https://upload.wikimedia.org/wikipedia/en/9/90/Scorpion_by_Drake.jpg",
    "username": "Username3",
    "userProfilePicture": "https://www.mockofun.com/wp-content/uploads/2019/12/circle-photo.jpg",
    "rating": "5/10",
    "review": "Really mid album, bababababa",
    }
  ]
  
  const user = { username: 'John Doe', avatar: 'https://example.com/avatar.jpg' };
  const rank = 8;
  const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id nulla vitae urna molestie elementum eu ac massa.';

      
  return (
    <div className="grid-container">
      <div className="top-left">
        <Album name={albums[0].name} artist={albums[0].artist} imageSrc={albums[0].image}/>
      </div>
      <div className="top-right">
        <WriteReview albumName={albums[0].name}/>
      </div>
      <div className="bottom-left">
      <h3>{"Songs"}</h3>
        <TrackList tracks={songData.items} />
      </div>
      <div className="bottom-right">
        <h3>{`Details for ${"AlbumName"}`}</h3>
            <DetailsCardList items={albums} />
      </div>
    </div>
  );
}

export default Details;
