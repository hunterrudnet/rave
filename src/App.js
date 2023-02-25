import logo from './logo.svg';
import './App.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
import SeeMoreList from "./components/SeeMoreList/SeeMoreList.tsx";
import {SEE_MORE_MOCK_DATA} from "./components/TestData/seeMoreMockData.tsx";

const props = {
  title: "Popular Albums",
  items: SEE_MORE_MOCK_DATA
}

function App() {
  return (
      <SeeMoreList {...props}/>
  );
}

export default App;
