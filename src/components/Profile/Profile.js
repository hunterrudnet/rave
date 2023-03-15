import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import "../Reused/reused.css";
import UserInfo from "./UserInfo/UserInfo";
import { Grid } from "@mui/material";
import FavoriteAlbums from "./FavoriteAlbums/FavoriteAlbums";
import Reviews from "../Reviews/Reviews";
import users from "../TestData/users.json";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  const user_id = users[user.email].user_id;
  return (
    isAuthenticated && (
      <Grid container spacing={2} sx={{ m: 0 }}>
        <Grid item xs={3}>
          <FavoriteAlbums user={user} />
        </Grid>
        <Grid item xs={0.5} />
        <Grid item xs={7}>
          <UserInfo user={user} />
          <br></br>
          <Reviews id={user_id} idType="user" />
        </Grid>
        {/* <Grid item xs={4}>
          <Reviews id={user_id} idType="user" />
        </Grid> */}
      </Grid>
    )
  );
};

export default Profile;