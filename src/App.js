import logo from './logo.svg';
import './App.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
import Slides from "./carousel/cards.js";
import SearchExtended from './carousel/searchExtended.js';

import * as React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LoginButton />
        <LogoutButton />
        <Profile />
        <SearchExtended />
        <Slides />
      </header>
    </div>
  );
}

export default App;
