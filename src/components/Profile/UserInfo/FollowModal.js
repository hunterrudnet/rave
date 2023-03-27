import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import React from "react";
import users from "../../TestData/users.json";
import {Divider, Grid, List, ListItem, ListSubheader} from "@mui/material";
import Typography from "@mui/material/Typography";
import ImageText from "../../Reused/ImageText";
import "../../Reused/reused.css";

const FollowModal = ({followers, user}) => {
  const userData = users[user.email];
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let buttonLabel;
  if (followers) {
    buttonLabel = `${userData.followers.length} follower`;
    if (userData.followers.length !== 1) {
      buttonLabel += "s";
    }
  } else {
    buttonLabel = `${userData.following.length} following`;
  }

  const data = followers ? userData.followers : userData.following;

  return (
      <>
        <Button onClick={handleOpen}>{buttonLabel}</Button>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
          <List className="scrollable-list center-modal" subheader={<li/>}>
            <ListSubheader>
              <Typography variant="h6">{buttonLabel}</Typography>
            </ListSubheader>

            {data.map(userEmail => {
              let userInList = users[userEmail];
              return (<div key={userInList.user_id}>
                <ListItem>
                  <Grid container spacing={2} sx={{m: 0}}>
                    <ImageText bigText={userInList.email}
                               smallText={userInList.name}
                               image={user.picture}/>
                  </Grid>
                </ListItem>
                <Divider/>
              </div>);
            })}
          </List>
        </Modal>
      </>
  );
};

export default FollowModal;