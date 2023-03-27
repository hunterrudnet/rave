import {useAuth0} from "@auth0/auth0-react";
import React from "react";
import "../Reused/reused.css";
import UserInfo from "./UserInfo/UserInfo";
import Grid from "@mui/material/Grid";
import FavoriteAlbums from "./FavoriteAlbums/FavoriteAlbums";
import Reviews from "../Reviews/Reviews";
import {Navigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {createOrUpdateUserThunk} from "../../services/user-data-thunks";
import {signIn} from "../../reducers/user-data-reducer";

const Profile = () => {
  let {loggedInUser, loading} = useSelector(state => state.userData);

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