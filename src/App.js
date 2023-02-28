import logo from './logo.svg';
import './App.css';
// import LoginButton from './components/LoginButton';
// import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile/Profile.js';
import * as React from 'react';
import Slides from "./components/Carousel/Cards.js"
import SearchExtended from "./components/Carousel/SearchExtended.js"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <LoginButton />
        <LogoutButton /> */}
        <Profile />
        {/* <SearchExtended />
        <Slides /> */}
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
    </div>
  );
}

export default App;
