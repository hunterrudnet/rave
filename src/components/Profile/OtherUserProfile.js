import "../Reused/reused.css";
import {useParams} from "react-router-dom";
import Profile from "./Profile";
import {useEffect, useState} from "react";
import {getUser} from "../../services/user-service";
import {objectEmpty} from "../Reused/ReusedFunctions";

const OtherUserProfile = () => {
  const {username} = useParams();
  const [userLoading, setUserLoading] = useState(false);
  const [userData, setUserData] = useState({});

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

  if (objectEmpty(userData)) {
    return `Could not find user: ${username}`;
  } else {
    return <Profile user={userData} loading={userLoading}/>;
  }
};

export default OtherUserProfile;