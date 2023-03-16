import React from "react";
import {Avatar} from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import users from "../../TestData/users.json";
import Grid from "@mui/material/Grid";

const UserInfo = ({user}) => {
  const userData = users[user.email];
  const followersData = `${userData.followers} followers`;
  const followingData = `${userData.following} following`;

  return (
      <Box>
        <Grid container spacing={2} sx={{m: 0}}>
          <Grid item xs={3}>
            <Avatar alt={user.name} src={user.picture}
                    sx={{width: 160, height: 160, mb: 1}}/>
          </Grid>
          <Grid item xs={9}>
            <Typography variant="h6" sx={{"pb": 1}}>{user.name}</Typography>
            <Typography variant="body2"
                        sx={{"pb": 1}}>@{user.nickname}</Typography>
            <Typography variant="body2"
                        sx={{"pb": 1}}>{followersData} • {followingData}</Typography>
            <Typography variant="caption">{userData.bio}</Typography>
          </Grid>
        </Grid>
      </Box>
  );
};

export default UserInfo;