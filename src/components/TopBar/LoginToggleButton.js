import {useAuth0} from "@auth0/auth0-react";
import React, {useEffect} from "react";
import {Button} from "@mui/material";
import ProfileDropdown from "./ProfileDropdown";
import {signIn, setLoading} from "../../reducers/user-data-reducer";
import {createOrUpdateUserThunk} from "../../services/user-data-thunks";
import {useDispatch, useSelector} from "react-redux";

const LoginToggleButton = () => {
  const {
    isAuthenticated,
    loginWithRedirect,
    isLoading,
    logout,
    user
  } = useAuth0();

  let {loggedInUser, loading} = useSelector(state => state.userData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading(isLoading));
    console.log(loading);
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
    return <></>;
  } else if (isAuthenticated) {
    return <ProfileDropdown logout={logout} image={loggedInUser.image}
                            name={loggedInUser.name}/>;
  } else {
    return <Button color="inherit" onClick={() => loginWithRedirect()}>Log
      In</Button>;
  }
};

export default LoginToggleButton;