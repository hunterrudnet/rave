import * as React from 'react';
import List from '@mui/material/List';
import {Button} from "@mui/material";
import {useState} from "react";
import {KeyboardArrowDown, KeyboardArrowUp} from "@mui/icons-material";
import Track from './Track';

export default function TrackList({tracks}) {

    const [limit, setLimit] = useState(3);

    const showMoreDocuments = () => {
        setLimit(limit + 3);
    };

    const resetLimit = () => {
        setLimit(3);
    };

    const renderRowsWithItem = (
        tracks
    ) => {
        return tracks.slice(0, limit).map((track, i) => {
            return (
                <Track name={"something"} track={track}/>
            );
        });
    };

    return (
        <div>
            <List sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
                {renderRowsWithItem(tracks)}
            </List>

            <Button
                endIcon={<KeyboardArrowDown />}
                onClick={showMoreDocuments}
                sx={{display: limit >= tracks.length ? "none" : ""}}
            >
                see more
            </Button>
            <Button
                endIcon={<KeyboardArrowUp />}
                onClick={resetLimit}
                sx={{display: limit > tracks.length ? "" : "none"}}
            >
                see less
            </Button>
        </div>
    );
}

