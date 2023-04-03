import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import React, {useState} from "react";
import "../../Reused/reused.css";
import Typography from "@mui/material/Typography";
import {useDispatch} from "react-redux";
import {
  createOrUpdateUserThunk, makeUserModeratorThunk,
  makeUserNotModeratorThunk
} from "../../../services/user-thunks";

const EditProfile = ({user}) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newUserData = new FormData(event.currentTarget);
    dispatch(createOrUpdateUserThunk({
      ...user,
      bio: newUserData.get("bio")
    }));
    if (newUserData.get("mod") === "mod") {
      dispatch(makeUserModeratorThunk({userId: user.id, role: "mod"}));
    } else {
      dispatch(makeUserNotModeratorThunk(user.id));
    }
    handleClose();
  };

  return (
      <>
        <Button onClick={handleOpen}>Edit Profile</Button>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
          <Box className="center-modal" component="form" onSubmit={handleSubmit}
               sx={{p: 2}}>
            <FormControl>
              <Typography variant="h5">Edit Profile</Typography>
              <TextField margin="normal" disabled label="Name"
                         defaultValue={user.name} variant="filled"/>
              <TextField margin="normal" disabled label="Email"
                         defaultValue={user.email} variant="filled"/>
              <TextField margin="normal" name="bio"
                         placeholder="Write a bio here" defaultValue={user.bio}
                         multiline rows={4} label="Bio"/>
              <FormControlLabel
                  control={<Checkbox value="mod" defaultChecked={user.isMod}
                                     name="mod"/>}
                  label="Moderator"/>
              <Button type="submit">Submit</Button>
            </FormControl>
          </Box>
        </Modal>
      </>
  );
};

export default EditProfile;