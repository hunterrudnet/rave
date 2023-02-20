import logo from './logo.svg';
import './App.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
import DetailsCard from './components/DetailsCard';

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
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <LoginButton />
        <LogoutButton />
        <Profile />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {/* {albums.map((album) => (
          <DetailsCard album={album} />
        ))} */}
    </div>
  );
}

export default App;
