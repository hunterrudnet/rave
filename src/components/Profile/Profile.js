import {useAuth0} from "@auth0/auth0-react";
import React, {useEffect} from "react";
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
import {Typography} from "@mui/material";

const Profile = () => {
  const {user, isAuthenticated, isLoading} = useAuth0();
  const dispatch = useDispatch();

  let {userData} = useSelector(state => state.userData);
  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      dispatch(getUserThunk(user.nickname)).then(() => {
        console.log(userData);
      });
    }
  }, []);

  if (isLoading) {
    return <div>Loading ...</div>;
  } else {
    console.log(userData);
  }

  if (!isLoading) {
    if (isAuthenticated) {
      let userForDb = {
        "username": user.nickname,
        "email": user.email,
        "image": user.picture
      };
      dispatch(createOrUpdateUserThunk(userForDb));
      let fullUserData = dispatch(getUserThunk(user.nickname));

      return (
          isAuthenticated && (
              <Grid container spacing={2}>
                <Grid item xs={3}>
                  <FavoriteAlbums user={user.UserId}/>
                </Grid>
                <Grid item xs={0.5}/>
                <Grid item xs={7}>
                  <UserInfo user={user.UserId}/>
                  <Reviews id={user.UserId} idType="user"/>
                </Grid>
              </Grid>
          )
      );
    } else {
      return <Navigate replace to={"/"}/>;
    }
  }

};

export default Profile;