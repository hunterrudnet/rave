import Profile from './components/Profile/Profile';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import TopBar from "./components/TopBar/TopBar";
import SeeMoreList from "./components/SeeMoreList/SeeMoreList.tsx";
import { SEE_MORE_MOCK_DATA } from "./components/TestData/seeMoreMockData.tsx";
import Slides from "./components/Carousel/Cards.js"
import Search from "./components/Carousel/SearchExtended.js"
const props = {
  title: "Popular Albums",
  items: SEE_MORE_MOCK_DATA
}

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
    <BrowserRouter>
      <div>
        <TopBar />
        <Routes>
          <Route index element={null} />
          <Route path="/see-more" element={<SeeMoreList {...props} />} />
          <Route path="/profile" element={<Profile />} />
          <Route path='/search' element={<Search />} />
          <Route path='/slides' element={<Slides />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
