import Profile from './components/Profile/Profile';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import TopBar from "./components/TopBar/TopBar";
import SeeMoreList from "./components/SeeMoreList/SeeMoreList.tsx";
import { SEE_MORE_MOCK_DATA } from "./components/TestData/seeMoreMockData.tsx";
import Slides from "./components/Carousel/Cards.js"
import Search from "./components/Carousel/SearchExtended.js"
import Details from './components/Details/Details.js'
const props = {
  title: "Popular Albums",
  items: SEE_MORE_MOCK_DATA
}

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
          <Route path='/details/:albumID' element={<Details />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
