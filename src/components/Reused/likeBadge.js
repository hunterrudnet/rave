import Badge from "@mui/material/Badge";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {red} from "@mui/material/colors";
import React from "react";

export const LikeBadge = (count) => {
    return (
        <Badge badgeContent={count} color="primary">
            <FavoriteIcon style={{color: red[500]}}/>
        </Badge>
    );
};