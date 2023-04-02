import "../Reused/reused.css";
import {useParams} from "react-router-dom";
import Profile from "./Profile";
import {useEffect, useState} from "react";
import {getUser} from "../../services/user-service";
import {useSelector} from "react-redux";

const OtherUserProfile = () => {
  let {loggedInUser, loggedInUserLoading, loggedIn} = useSelector(
      state => state.loggedInUserData);
  const {username} = useParams();
  const [userLoading, setUserLoading] = useState(false);
  const [userData, updateUserData] = useState([]);
  const [isLoggedInUser, setIsLoggedInUser] = useState(false);

  const fetchUserData = async () => {
    const user = await getUser(username);
    updateUserData(user);
    setUserLoading(false);
  };

  useEffect(() => {
    setUserLoading(true);
    updateUserData([]);
    fetchUserData();
  }, []);

  useEffect(() => {
    if (loggedIn && !loggedInUserLoading && !userLoading) {
      if (loggedInUser.username && userData.username) {
        setIsLoggedInUser(loggedInUser.username === userData.username);
      }
    }
  }, [loggedInUserLoading, userLoading]);

  return <Profile user={userData} loading={userLoading}
                  isLoggedInUser={isLoggedInUser}/>;

};

export default OtherUserProfile;