import React, {useEffect, useState} from "react";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import VerifiedIcon from '@mui/icons-material/Verified';
import FollowModal from "./FollowModal";
import EditProfile from "./EditProfile";
import {
  getWhoFollowsUser,
  getWhoUserFollows
} from "../../../services/following-service";
import {useSelector} from "react-redux";

const UserInfo = ({user}) => {
  let {loggedInUser, loggedInUserLoading, loggedIn} = useSelector(
      state => state.loggedInUserData);

  const [followLoading, setFollowLoading] = useState(true);
  const [followersData, updateFollowers] = useState([]);
  const [followingData, updateFollowing] = useState([]);
  const [isLoggedInUser, setIsLoggedInUser] = useState(false);
  const [userData, setUserData] = useState(user);

  const fetchFollowData = async () => {
    const followers = await getWhoFollowsUser(user.id);
    updateFollowers(followers);
    const following = await getWhoUserFollows(user.id);
    updateFollowing(following);
    setFollowLoading(false);
  };

  useEffect(() => {
    setFollowLoading(true);
    updateFollowers([]);
    updateFollowing([]);
    fetchFollowData();
  }, [user]);

  useEffect(() => {
    if (loggedIn && !loggedInUserLoading) {
      if (loggedInUser.username && userData.username) {
        if (loggedInUser.username === userData.username) {
          setIsLoggedInUser(loggedInUser.username === userData.username);
          setUserData(loggedInUser);
        }
      }
    }
  }, [loggedInUserLoading, loggedInUser, loggedIn]);

  const userImage = (userData.image) ? userData.image : "/images/rave-logo.jpg";
  let verified = null;
  if (userData.isMod) {
    verified = <VerifiedIcon/>;
  }

  return (
      <Box>
        <Grid container spacing={2} sx={{m: 0}}>
          <Grid item xs={3}>
            <Avatar alt={userData.name} src={userImage}
                    sx={{width: 160, height: 160, mb: 1}}/>
          </Grid>
          <Grid item xs={9}>
            <span>
              {isLoggedInUser && <EditProfile user={userData}/>}
              <Typography variant="h6"
                          sx={{"pb": 1}}>{userData.name} {verified}</Typography>
            </span>
            <Typography variant="body2"
                        sx={{"pb": 1}}>@{userData.username}</Typography>
            <Box>
              <FollowModal followers={true} data={followersData}
                           loading={followLoading}/>
              <FollowModal followers={false} data={followingData}
                           loading={followLoading}/>
            </Box>
            <Typography variant="caption">{userData.bio}</Typography>
          </Grid>
        </Grid>
      </Box>
  );
};

export default UserInfo;