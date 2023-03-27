import React, {useEffect, useState} from "react";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListSubheader from "@mui/material/ListSubheader";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import "../../Reused/reused.css";
import {getLikedAlbums} from "../../../services/likes-service";
import {getAlbumBySpotifyId} from "../../../services/albums-service";
import ImageText from "../../Reused/ImageText";

const FavoriteAlbums = ({userId}) => {
  const [loading, setLoading] = useState(true);
  const [albumData, updateAlbumData] = useState([]);

  const fetchLikedAlbumsData = async () => {
    const favoriteAlbums = await getLikedAlbums(userId);
    const newData = await Promise.all(
        favoriteAlbums.map(async ({spotifyId}) => {
          console.log(spotifyId);
          let dataForAlbum = await getAlbumBySpotifyId(spotifyId);
          let albumDataToDisplay = {};
          if ("images" in dataForAlbum && dataForAlbum.images.length > 0) {
            albumDataToDisplay.image = dataForAlbum.images[0].url;
          }
          return {
            ...albumDataToDisplay,
            name: dataForAlbum.name,
            artist: dataForAlbum.artist.name,
            spotifyId: dataForAlbum.id
          };
        }));
    updateAlbumData(newData);
    setLoading(false);
  };

  useEffect(() => {
    console.log("FETCH");
    setLoading(true);
    updateAlbumData([]);
    fetchLikedAlbumsData();
  }, []);

  useEffect(() => {
    console.log("Rerender");
    console.log(albumData);
  }, [albumData]);

  function getFavorites() {
    return albumData.map(data => {
      return (<div key={data.spotifyId}>
        <ListItem>
          <Grid container spacing={2} sx={{m: 0}}>
            <ImageText bigText={data.name} smallText={data.artist}
                       image={data.image}/>
          </Grid>
        </ListItem>
        <Divider/>
      </div>);
    });
  }

  return (<List className="scrollable-list" subheader={<li/>}>
    <ListSubheader>
      <Typography variant="h6">Favorite Albums</Typography>
    </ListSubheader>
    {loading && "Loading..."}
    {!loading && getFavorites()}
  </List>);
};

export default FavoriteAlbums;