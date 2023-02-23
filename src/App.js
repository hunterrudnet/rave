import './App.css';
import Profile from './components/Profile/Profile';
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import TopBar from "./components/TopBar/TopBar";

function App() {
  return (
      <BrowserRouter>
        <div>
          <TopBar/>
          <Routes>
            <Route index element={null}/>
            <Route path="/profile" element={<Profile/>}/>
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
