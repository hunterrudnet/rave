import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";

export default function SeeMoreItem({stats, imgUrl, linkUrl, primaryText, secondaryText, visible}) {

    return (
        <ListItem button component="a" href={linkUrl} sx={{ backgroundColor: "#ececec", borderRadius: "5px", marginTop: "5px" }}
                  secondaryAction={
                      <ListItemText primaryTypographyProps={{ style: {fontWeight: "bold"} }} edge="end" primary={ stats } />
                  }
        >
            <ListItemAvatar>
                <Avatar src={imgUrl} />
            </ListItemAvatar>
            <ListItemText
                primary={primaryText}
                secondary={secondaryText}
            />
        </ListItem>
    );
}