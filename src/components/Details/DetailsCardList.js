import * as React from 'react';
import List from '@mui/material/List';
import {Button, Typography} from "@mui/material";
import {useState} from "react";
import {KeyboardArrowDown, KeyboardArrowUp} from "@mui/icons-material";
import DetailsCard from './DetailsCard';

const item2 = {
    stats: "2.1k",
    primaryText: "Dark Side of the Moon",
    secondaryText: "Psychedelic Rock",
    linkUrl: "/",
    imgUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Drake_-_Take_Care_cover.jpg/220px-Drake_-_Take_Care_cover.jpg",
}

// Displays a generic list of items, starting with a limit of 3.  If there are more than 3 items, an option
// to see more will appear at the bottom of the list and allow the user to click it to expand the list with 3 further
// items.  If all items are already displayed, the see more option will not be visible and will instead be
// replaced with a see less option to reset the list to 3 items.
//
// SeeMoreList takes 2 props:
//    -- A title for the header of the list
//    -- An array of item objects representing the items in the list
//  Items are formed as follows:
//    -- stats: string representing statistic (e.g. rating out of ten, number of likes, number of followers, etc.)
//    -- primaryText: The main text for the item (e.g. Album name, user name, etc.)
//    -- secondaryText: optional string for subtext of the item (e.g. genre, truncated review text, etc.)
//    -- linkUrl: a url that clicking this item in the list will redirect to
//    -- imgUrl: path to image to be used for item (e.g. album artwork, profile picture, etc.)
//  Example item:
// {
//     stats: "2.1k",
//     primaryText: "Dark Side of the Moon",
//     secondaryText: "Psychedelic Rock",
//     linkUrl: "/",
//     imgUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Drake_-_Take_Care_cover.jpg/220px-Drake_-_Take_Care_cover.jpg",
// }
//
export default function DetailsCardList({items}) {

    const [limit, setLimit] = useState(2);

    const showMoreDocuments = () => {
        setLimit(limit + 2);
    };

    const resetLimit = () => {
        setLimit(2);
    };

    const renderRowsWithItem = (
        items
    ) => {
        return items.slice(0, limit).map((item, i) => {
            return (
                <DetailsCard album={item} sx={{mb: "25"}}/>
            );
        });
    };

    return (
        <div>
            <List sx={{width: '100%', bgcolor: 'background.paper'}}>
                {renderRowsWithItem(items)}
            </List>

            <Button
                endIcon={<KeyboardArrowDown />}
                onClick={showMoreDocuments}
                sx={{display: limit >= items.length ? "none" : ""}}
            >
                see more
            </Button>
            <Button
                endIcon={<KeyboardArrowUp />}
                onClick={resetLimit}
                sx={{display: limit > items.length ? "" : "none"}}
            >
                see less
            </Button>
        </div>
    );
}