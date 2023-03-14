import {useAuth0} from "@auth0/auth0-react";
import React from "react";
import "../Reused/reused.css";
import UserInfo from "./UserInfo/UserInfo";
import {Grid} from "@mui/material";
import FavoriteAlbums from "./FavoriteAlbums/FavoriteAlbums";
import Reviews from "../Reviews/Reviews";

const Profile = () => {
  const {user, isAuthenticated, isLoading} = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
      isAuthenticated && (
          <Grid container spacing={2} sx={{m: 0}}>
            <Grid item xs={3}>
              <UserInfo user={user}/>
            </Grid>
            <Grid item xs={1}/>
            <Grid item xs={4}>
              <FavoriteAlbums user={user}/>
            </Grid>
            <Grid item xs={4}>
              <Reviews user={user}/>
            </Grid>
          </Grid>
      )
  );
};

export default Profile;