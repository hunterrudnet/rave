import "../Reused/reused.css";
import {useParams} from "react-router-dom";
import Profile from "./Profile";
import {useEffect, useState} from "react";
import {getUser} from "../../services/user-service";

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

  if (!userLoading && (!userData || Object.keys(userData).length === 0)) {
    return `Could not find user: ${username}`;
  } else {
    return <Profile user={userData} loading={userLoading}/>;
  }
};

export default OtherUserProfile;