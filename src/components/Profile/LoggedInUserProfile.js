import "../Reused/reused.css";
import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";
import Profile from "./Profile";

const LoggedInUserProfile = () => {
  let {loggedInUser, loggedInUserLoading, loggedIn} = useSelector(
      state => state.loggedInUserData);

  if (!loggedInUserLoading && !loggedIn) {
    return <Navigate replace to={"/"}/>;
  } else {
    return <Profile loading={loggedInUserLoading} user={loggedInUser}/>;
  }
};

export default LoggedInUserProfile;