import "../Reused/reused.css";
import {Navigate, useParams} from "react-router-dom";
import Profile from "./Profile";
import {useEffect, useState} from "react";
import {getUser} from "../../services/user-service";
import {useSelector} from "react-redux";

const OtherUserProfile = () => {
  let {loggedInUser, loggedInUserLoading, loggedIn} = useSelector(
      state => state.loggedInUserData);
  const {username} = useParams();
  const [userLoading, setUserLoading] = useState(false);
  const [userData, setUserData] = useState([]);
  const [isLoggedInUser, setIsLoggedInUser] = useState(false);

  const fetchUserData = async () => {
    const user = await getUser(username);
    setUserData(user);
    setUserLoading(false);
  };

  useEffect(() => {
    setUserLoading(true);
    setUserData({});
    fetchUserData();
  }, [username]);

  useEffect(() => {
    if (loggedIn && !loggedInUserLoading && !userLoading) {
      if (loggedInUser.username && userData.username) {
        if (loggedInUser.username === userData.username) {
          setIsLoggedInUser(loggedInUser.username === userData.username);
          setUserData(loggedInUser);
        }
      }
    }
  }, [loggedInUserLoading, userLoading, loggedInUser]);

  if (!userLoading && (!userData || Object.keys(userData).length === 0)) {
    return `Could not find user: ${username}`;
  } else {
    return <Profile user={userData} loading={userLoading}
                    isLoggedInUser={isLoggedInUser}/>;
  }

};

export default OtherUserProfile;