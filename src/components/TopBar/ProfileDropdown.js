import React, {useState} from "react";
import {useAuth0} from "@auth0/auth0-react";
import IconButton from "@mui/material/IconButton";
import {Avatar, Menu, MenuItem} from "@mui/material";
import {Link} from "@mui/material";
import {Link as RouterLink} from "react-router-dom";

const ProfileDropdown = () => {
  const {logout, user} = useAuth0();
  const [anchorEl, setAnchorEl] = useState();

  const open = Boolean(anchorEl);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const handleLogout = () => {
    handleClose();
    logout({logoutParams: {returnTo: window.location.origin}});
  };

  return (
      <>
        <IconButton onClick={handleClick}>
          <Avatar alt={user.name} src={user.picture}
                  sx={{width: 40, height: 40}}/>
        </IconButton>
        <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            id="profile-menu">
          <MenuItem onClick={handleClose}>
            <Link component={RouterLink} to="/profile">Profile</Link>
          </MenuItem>
          <MenuItem onClick={handleLogout}>
            Log Out
          </MenuItem>
        </Menu>
      </>
  );
};

export default ProfileDropdown;