import React from "react";
import Grid from "@mui/material/Grid";
import "./reused.css";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

const ImageText = ({bigText, smallText, image}) => {
  return (
      <Grid container spacing={2} sx={{m: 0}}>
        <Grid item xs={3}>
          <Avatar src={image} sx={{width: 65, height: 65}}/>
        </Grid>
        <Grid item xs={9}>
          <Typography variant="h6">{bigText}</Typography>
          <Typography variant="subtitle">{smallText}</Typography>
        </Grid>
      </Grid>
  );
};

export default ImageText;