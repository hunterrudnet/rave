import Profile from './components/Profile/Profile';
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import TopBar from "./components/TopBar/TopBar";
import SeeMoreList from "./components/SeeMoreList/SeeMoreList.tsx";
import {SEE_MORE_MOCK_DATA} from "./components/TestData/seeMoreMockData.tsx";
import Slides from "./components/Carousel/Cards.js";
import Search from "./components/Carousel/SearchExtended.js";
import {configureStore} from '@reduxjs/toolkit';
import userReducer from "reducers/user-reducer";
import reviewsReducer from "reducers/reviews-reducer";
import albumsReducer from "reducers/albums-reducer";
import {Provider} from "react-redux";

const props = {
  title: "Popular Albums",
  items: SEE_MORE_MOCK_DATA
};

const store = configureStore(
    {
      reducer: {
        userData: userReducer,
        reviewsData: reviewsReducer,
        albumsData: albumsReducer
      }
    });

function App() {
  return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <TopBar/>
            <Routes>
              <Route index element={null}/>
              <Route path="/see-more" element={<SeeMoreList {...props} />}/>
              <Route path="/profile" element={<Profile/>}/>
              <Route path="/search" element={<Search/>}/>
              <Route path="/slides" element={<Slides/>}/>
            </Routes>
          </div>
        </BrowserRouter>
      </Provider>
  );
}

export default App;
