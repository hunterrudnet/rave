import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import LoginToggleButton from "./LoginToggleButton";
import {Link} from "react-router-dom";
import "./topbar.css";
import {CssBaseline} from "@mui/material";

const TopBar = () => {
  return (
      <CssBaseline>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
              <Link className="top-bar-link" to="/">Rave</Link>
            </Typography>
            <LoginToggleButton/>
          </Toolbar>
        </AppBar>
      </CssBaseline>
  );
};

export default TopBar;