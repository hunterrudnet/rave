import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import LoginToggleButton from "./LoginToggleButton";
import { Link } from "react-router-dom";
import "./topbar.css";
import { CssBaseline } from "@mui/material";
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import CardMedia from '@mui/material/CardMedia';

// import "./../../../public/images/rave-logo.png"
// import "./rave-logo.png"
const TopBar = () => {
  return (
    <div>
      <Box sx={{ position: 'relative', width: 151, height: '100%', display: 'flex', alignItems: 'center' }}>
        <CardMedia
          component="img"
          sx={{ position: 'absolute', top: 0, p: 1, right: 0, bottom: 0, left: 0, objectFit: 'cover', borderRadius: 10 }}
          image="/images/rave-logo.jpg"
          alt="Album cover image information"
        />
      </Box>
      <CssBaseline>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link className="top-bar-link" to="/">
                <Box
                  component="img"
                  // sx={{
                  //   height: 3,
                  //   width: 3,
                  //   maxHeight: { xs: 233, md: 167 },
                  //   maxWidth: { xs: 350, md: 250 },
                  // }}
                  alt="logo"
                  src={require("./../../images/rave-logo.jpg")}
                />
                {/* <img src="./rave-logo.png" alt="Girl in a jacket"></img> */}
                <Avatar alt="rave" src="./../..rave-logo.jpg"
                  sx={{ width: 40, height: 40 }} />

                {/* <Box sx={{ position: 'relative', width: 151, height: '100%', display: 'flex', alignItems: 'center' }}>
                <CardMedia
                  component="img"
                  sx={{ position: 'absolute', top: 0, p: 1, right: 0, bottom: 0, left: 0, objectFit: 'cover', borderRadius: 10 }}
                  image="./rave-logo.png"
                  alt="Album cover image information"
                />
              </Box> */}
              </Link>
            </Typography>
            <LoginToggleButton />
          </Toolbar>
        </AppBar>
      </CssBaseline>
    </div>
  );
};

export default TopBar;