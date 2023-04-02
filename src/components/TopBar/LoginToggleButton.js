import {useAuth0} from "@auth0/auth0-react";
import React, {useEffect} from "react";
import {Button} from "@mui/material";
import ProfileDropdown from "./ProfileDropdown";
import {createOrUpdateUserThunk} from "../../services/user-thunks";
import {useDispatch, useSelector} from "react-redux";
import {stopLoading} from "../../reducers/user-data-reducer";

const LoginToggleButton = () => {
  const {
    isAuthenticated,
    loginWithRedirect,
    isLoading,
    logout,
    user
  } = useAuth0();

  let {loggedInUser, loggedIn} = useSelector(state => state.loggedInUserData);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      dispatch(stopLoading());
    }
    if (isAuthenticated && !loggedIn) {
      let userForDb = {
        "username": user.nickname,
        "name": user.name,
        "email": user.email,
        "image": user.picture
      };
      dispatch(createOrUpdateUserThunk(userForDb));
    }
  }, [isLoading]);

  if (isLoading) {
    return <></>;
  } else if (isAuthenticated) {
    return <ProfileDropdown logout={logout} image={loggedInUser.image}
                            name={loggedInUser.name}
                            moderator={loggedInUser.isMod}/>;
  } else {
    return <Button color="inherit" onClick={() => loginWithRedirect()}>Log
      In</Button>;
  }
};

export default LoginToggleButton;