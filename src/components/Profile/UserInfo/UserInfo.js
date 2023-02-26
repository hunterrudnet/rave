import React from "react";
import {Avatar} from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import users from "../../TestData/users.json"

const UserInfo = ({user}) => {
  const userData = users[user.email];
  const followersData = `${userData.followers} followers`;
  const followingData = `${userData.following} following`;

  return (
      <Box>
        <Avatar alt={user.name} src={user.picture}
                sx={{width: 120, height: 120, mb: 1}}/>
        <Typography variant="h6" sx={{"pb": 1}}>{user.name}</Typography>
        <Typography variant="body2" sx={{"pb": 1}}>@{user.nickname}</Typography>
        <Typography variant="body2" sx={{"pb": 1}}>{followersData} • {followingData}</Typography>
        <Typography variant="caption">{userData.bio}</Typography>
      </Box>
  );
};

export default UserInfo;