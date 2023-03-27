import React from "react";
import "../Reused/reused.css";
import UserInfo from "./UserInfo/UserInfo";
import Grid from "@mui/material/Grid";
import FavoriteAlbums from "./FavoriteAlbums/FavoriteAlbums";
import Reviews from "../Reviews/Reviews";
import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";

const Profile = () => {
  let {loggedInUser, loading} = useSelector(state => state.loggedInUserData);
  const isEmpty = (obj) => Object.keys(obj).length === 0;

  if (loading) {
    return <div>Loading ...</div>;
  } else if (loggedInUser === undefined || isEmpty(loggedInUser)) {
    return <Navigate replace to={"/"}/>;
  } else {
    return (
        <Grid container spacing={2}>
          <Grid item xs={3}>
            {/*<FavoriteAlbums userId={loggedInUser.UserId}/>*/}
          </Grid>
          <Grid item xs={0.5}/>
          <Grid item xs={7}>
            <UserInfo user={loggedInUser}/>
            {/*<Reviews id={loggedInUser.UserId} idType="user"/>*/}
          </Grid>
        </Grid>
    );
  }

};

export default Profile;