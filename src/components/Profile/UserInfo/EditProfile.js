import Input from "@mui/material/Input";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import React from "react";
import users from "../../TestData/users.json";
import "../../Reused/reused.css"

const EditProfile = ({user}) => {
  const userData = users[user.email];

  const [open, setOpen] = React.useState(false);
  const [admin, toggleAdmin] = React.useState(userData.admin);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleToggleAdmin = (event) => {
    toggleAdmin(event.target.checked);
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
          <Box className="center-modal">
            <FormControl>
              <legend>Edit Profile</legend>
              <Input value={user.email} disabled/>
              <TextareaAutosize placeholder="Write a bio here"
                                defaultValue={userData.bio}/>
              <FormControlLabel control={<Checkbox checked={admin}
                                                   onChange={handleToggleAdmin}/>}
                                label="Admin"/>
              <Button>Submit</Button>
            </FormControl>
          </Box>
        </Modal>
      </>
  );
};

export default EditProfile;