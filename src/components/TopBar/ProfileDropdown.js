import React, {useState} from "react";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {Link as RouterLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {signOut} from "../../reducers/user-data-reducer";
import "../Reused/reused.css"

const ProfileDropdown = ({name, image, logout, moderator}) => {
  const [anchorEl, setAnchorEl] = useState();
  const dispatch = useDispatch();

  const open = Boolean(anchorEl);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const handleLogout = () => {
    handleClose();
    logout({logoutParams: {returnTo: window.location.origin}});
    dispatch(signOut());
  };

  const moderatorPanel = () => {
    return (
        <MenuItem onClick={handleClose}
                  component={RouterLink} to="/moderator">
          Moderator Panel
        </MenuItem>);
  };

  return (
      <>
        <IconButton onClick={handleClick}>
          <Avatar alt={name} src={image}
                  sx={{width: 40, height: 40}}/>
        </IconButton>
        <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            id="profile-menu"
            className="link-no-decoration"
        >
          <MenuItem onClick={handleClose}
                    component={RouterLink} to="/profile">
            Profile
          </MenuItem>
          {moderator && moderatorPanel()}
          <MenuItem onClick={handleLogout}>
            Log Out
          </MenuItem>
        </Menu>
      </>
  );
};

export default ProfileDropdown;