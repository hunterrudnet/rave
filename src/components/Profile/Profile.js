import {useAuth0} from "@auth0/auth0-react";
import React from "react";
import "./profile.css";
import UserInfo from "./UserInfo/UserInfo";
import {Grid} from "@mui/material";
import FavoriteAlbums from "./FavoriteAlbums/FavoriteAlbums";

const Profile = () => {
  const {user, isAuthenticated, isLoading} = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
      isAuthenticated && (
          <Grid container spacing={2} sx={{m: 0}}>
            <Grid item xs={2}>
              <UserInfo user={user}/>
            </Grid>
            <Grid item xs={4}>
              <FavoriteAlbums user={user}/>
            </Grid>
          </Grid>
      )
  );
};

export default Profile;