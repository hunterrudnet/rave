import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import TopBar from "./components/TopBar/TopBar";
import { configureStore } from '@reduxjs/toolkit';
import userDataReducer from "./reducers/user-data-reducer";
import { Provider } from "react-redux";
import Details from './components/AlbumInfo/Details.js';
import ModeratorPanel from "./components/ModeratorPanel/ModeratorPanel";
import SearchPage from './components/Search/SearchPage';
import HomePage from "./components/Home/HomePage";
import OtherUserProfile from "./components/Profile/OtherUserProfile";
import LoggedInUserProfile from "./components/Profile/LoggedInUserProfile";
import { ThemeProvider, createTheme } from '@mui/material';


const store = configureStore({ reducer: { loggedInUserData: userDataReducer } });

const theme = createTheme({
  typography: {
    fontFamily:
      ["Red Hat Display", " sans-serif"].join(","),
    body1: {
      fontFamily:
        ["PT Serif", " serif"].join(","),
    },
    body2: {
      fontFamily:
        ["PT Serif", " serif"].join(","),
    },
    'h4': {
      fontFamily:
        ["Red Hat Display", " sans-serif"].join(","),
    }

  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>

      <Provider store={store}>
        <BrowserRouter>
          <div>
            <TopBar />
            <Routes>
              <Route index element={<HomePage />} />
              <Route path="/profile" element={<LoggedInUserProfile />} />
              <Route path="/profile/:username" element={<OtherUserProfile />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/moderator" element={<ModeratorPanel />} />
              <Route path="/details/:albumID" element={<Details />} />
            </Routes>
          </div>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>);
}

export default App;
