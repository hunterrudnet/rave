import React from "react";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import users from "../../TestData/users.json";
import Grid from "@mui/material/Grid";
import VerifiedIcon from '@mui/icons-material/Verified';
import FollowModal from "./FollowModal";
import EditProfile from "./EditProfile";

const UserInfo = ({user}) => {
  const userData = users[user.email];

  let verified = null;
  if (userData.admin) {
    verified = <VerifiedIcon/>;
  }

  return (
      <Box>
        <Grid container spacing={2} sx={{m: 0}}>
          <Grid item xs={3}>
            <Avatar alt={user.name} src={user.picture}
                    sx={{width: 160, height: 160, mb: 1}}/>
          </Grid>
          <Grid item xs={9}>
            <span>
              <EditProfile user={user}/>
              <Typography variant="h6"
                          sx={{"pb": 1}}>{user.name} {verified}</Typography>
            </span>
            <Typography variant="body2"
                        sx={{"pb": 1}}>@{user.nickname}</Typography>
            <Box>
            <FollowModal user={user} followers={true}/>
            <FollowModal user={user} followers={false}/>
            </Box>
            <Typography variant="caption">{userData.bio}</Typography>
          </Grid>
        </Grid>
      </Box>
  );
};

export default UserInfo;