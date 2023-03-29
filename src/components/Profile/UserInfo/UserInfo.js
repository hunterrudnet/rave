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

const UserInfo = ({user}) => {
  let verified = null;
  if (user.isMod) {
    verified = <VerifiedIcon/>;
  }

  const [followLoading, setFollowLoading] = useState(true);
  const [followersData, updateFollowers] = useState([]);
  const [followingData, updateFollowing] = useState([]);

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
  }, []);

  return (
      <Box>
        <Grid container spacing={2} sx={{m: 0}}>
          <Grid item xs={3}>
            <Avatar alt={user.name} src={user.image}
                    sx={{width: 160, height: 160, mb: 1}}/>
          </Grid>
          <Grid item xs={9}>
            <span>
              <EditProfile user={user}/>
              <Typography variant="h6"
                          sx={{"pb": 1}}>{user.name} {verified}</Typography>
            </span>
            <Typography variant="body2"
                        sx={{"pb": 1}}>@{user.username}</Typography>
            <Box>
              <FollowModal followers={true} data={followersData}
                           loading={followLoading}/>
              <FollowModal followers={false} data={followingData}
                           loading={followLoading}/>
            </Box>
            <Typography variant="caption">{user.bio}</Typography>
          </Grid>
        </Grid>
      </Box>
  );
};

export default UserInfo;