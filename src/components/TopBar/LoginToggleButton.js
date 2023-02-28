import {useAuth0} from "@auth0/auth0-react";
import React from "react";
import {Button} from "@mui/material";
import ProfileDropdown from "./ProfileDropdown";

const LoginToggleButton = () => {
  const {isAuthenticated, loginWithRedirect, isLoading} = useAuth0();

  if (isLoading) {
    return <></>;
  } else if (isAuthenticated) {
    return <ProfileDropdown/>;
  } else {
    return <Button color="inherit" onClick={() => loginWithRedirect()}>Log
      In</Button>;
  }
};

export default LoginToggleButton;