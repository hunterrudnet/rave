import {useAuth0} from "@auth0/auth0-react";
import React from "react";
import "../Reused/reused.css";
import UserInfo from "./UserInfo/UserInfo";
import Grid from "@mui/material/Grid";
import FavoriteAlbums from "./FavoriteAlbums/FavoriteAlbums";
import Reviews from "../Reviews/Reviews";
import {Navigate} from "react-router-dom";
import users from "../TestData/users.json";
import {useDispatch} from "react-redux";

const Profile = () => {
  const {user, isAuthenticated, isLoading} = useAuth0();
  const dispatch = useDispatch();

  const tuitClickHandler = () => {
    const newTuit = {
      tuit: whatsHappening
    };
    dispatch(createTuitThunk(newTuit));
  };

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (!isLoading) {
    if (isAuthenticated) {
      let username = user.name;

    } else {
      return <Navigate replace to={"/"}/>
    }
  }

  // const user_id = users[user.email].user_id;
  // return (
  //     isAuthenticated && (
  //         <Grid container spacing={2}>
  //           <Grid item xs={3}>
  //             <FavoriteAlbums user={user}/>
  //           </Grid>
  //           <Grid item xs={0.5}/>
  //           <Grid item xs={7}>
  //             <UserInfo user={user}/>
  //             <Reviews id={user_id} idType="user"/>
  //           </Grid>
  //         </Grid>
  //     )
  // );
};

export default Profile;