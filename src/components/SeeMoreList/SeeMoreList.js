import List from '@mui/material/List';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SeeMoreItem from "./SeeMoreItem";
import { useState } from "react";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import ListSubheader from "@mui/material/ListSubheader";

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

const INITIAL_LIMIT = 3;
const SeeMoreList = ({ title, items, noContentMessage }) => {
  const [limit, setLimit] = useState(INITIAL_LIMIT);

  const showMoreDocuments = () => {
    setLimit(limit + 3);
  };

  const resetLimit = () => {
    setLimit(3);
  };

  const renderRowsWithItem = (items) => {
    return items.slice(0, limit).map((item, i) => {
      return (<SeeMoreItem key={i} {...item} sx={{ marginTop: "5px" }} />);
    });
  };

  if (items.length === 0) {
    return (
      <div>
        <ListSubheader sx={{ p: 0 }}>
          <Typography sx={{ pt: '8px', width: '100%', bgcolor: 'background.paper' }}
            variant="h5" component="h5" fontWeight="bold" >{title}</Typography>
        </ListSubheader>

        <Typography variant="h6" component="h6">
          {noContentMessage}
        </Typography>
      </div>);
  } else {
    return (
      <div>
        <List
          sx={{ width: '100%', bgcolor: 'background.paper' }}>
          <ListSubheader sx={{ p: 0 }}>
            <Typography variant="h5" fontWeight="bold">{title}</Typography>
          </ListSubheader>
          {renderRowsWithItem(items)}
        </List>

        <Button
          endIcon={<KeyboardArrowDown />}
          onClick={showMoreDocuments}
          sx={{ display: limit >= items.length ? "none" : "" }}
        >
          see more
        </Button>
        <Button
          endIcon={<KeyboardArrowUp />}
          onClick={resetLimit}
          sx={{
            display: (limit > items.length && !(items.length
              < INITIAL_LIMIT)) ? "" : "none"
          }}
        >
          see less
        </Button>
      </div>
    );
  }
};

export default SeeMoreList;