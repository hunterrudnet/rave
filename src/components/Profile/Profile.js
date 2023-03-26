import {useAuth0} from "@auth0/auth0-react";
import React, {useEffect, useState} from "react";
import "../Reused/reused.css";
import UserInfo from "./UserInfo/UserInfo";
import Grid from "@mui/material/Grid";
import FavoriteAlbums from "./FavoriteAlbums/FavoriteAlbums";
import Reviews from "../Reviews/Reviews";
import {Navigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {
  getUserThunk,
  createOrUpdateUserThunk
} from "../../services/user-data-thunks";
import {signIn} from "../../reducers/user-data-reducer";
import {Typography} from "@mui/material";
import {isFulfilled} from "@reduxjs/toolkit";

const Profile = () => {
  const {user, isAuthenticated, isLoading} = useAuth0();
  let {loggedInUser} = useSelector(state => state.userData);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated) {
      let userForDb = {
        "username": user.nickname,
        "name": user.name,
        "email": user.email,
        "image": user.picture
      };
      dispatch(signIn(userForDb));
      dispatch(createOrUpdateUserThunk(userForDb));
    }
  }, [isLoading]);

  if (isLoading) {
    return <div>Loading ...</div>;
  } else {
    if (isAuthenticated) {
      return (
          <Grid container spacing={2}>
            <Grid item xs={3}>
              {/*<FavoriteAlbums user={user.UserId}/>*/}
            </Grid>
            <Grid item xs={0.5}/>
            <Grid item xs={7}>
              {/*<UserInfo user={loggedInUser}/>*/}
              {/*<Reviews id={user.UserId} idType="user"/>*/}
            </Grid>
          </Grid>
      );
    } else {
      return <Navigate replace to={"/"}/>;
    }
  }

};

export default Profile;