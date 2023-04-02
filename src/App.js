import Profile from './components/Profile/Profile';
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import TopBar from "./components/TopBar/TopBar";
import SeeMoreList from "./components/SeeMoreList/SeeMoreList.tsx";
import {SEE_MORE_MOCK_DATA} from "./components/TestData/seeMoreMockData.tsx";
import {configureStore} from '@reduxjs/toolkit';
import userDataReducer from "./reducers/user-data-reducer";
import {Provider} from "react-redux";
import Details from './components/Details/Details.js';
import ModeratorPanel from "./components/ModeratorPanel/ModeratorPanel";
import SearchPage from './components/Search/SearchPage';
import HomePage from "./components/Home/HomePage";
import OtherUserProfile from "./components/Profile/OtherUserProfile";
import LoggedInUserProfile from "./components/Profile/LoggedInUserProfile";

const props = {
  title: "Popular Albums", items: SEE_MORE_MOCK_DATA
};

const store = configureStore({reducer: {loggedInUserData: userDataReducer}});

function App() {
  return (<Provider store={store}>
    <BrowserRouter>
      <div>
        <TopBar/>
        <Routes>
          <Route index element={<HomePage/>}/>
          <Route path="/see-more" element={<SeeMoreList {...props} />}/>
          <Route path="/profile" element={<LoggedInUserProfile/>}/>
          <Route path="/profile/:username" element={<OtherUserProfile/>}/>
          <Route path="/search" element={<SearchPage/>}/>
          <Route path="/moderator" element={<ModeratorPanel/>}/>
          <Route path="/details/:albumID" element={<Details/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  </Provider>);
}

export default App;
