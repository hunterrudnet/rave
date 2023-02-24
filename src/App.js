import logo from './logo.svg';
import './App.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
import Slides from "./carousel/cards.js";
import Carousel from 'react-spring-3d-carousel';
import * as React from 'react';
import Card from './carousel/card.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LoginButton />
        <LogoutButton />
        <Profile />
        <Slides />
        {/* <Card /> */}

      </header>
    </div>
  );
}

export default App;
