import React, {useEffect, useState} from "react";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import "../../Reused/reused.css";
import {getLikedAlbums} from "../../../services/likes-service";
import ImageText from "../../Reused/ImageText";
import {Link} from "react-router-dom";
import SeeMoreList from "../../SeeMoreList/SeeMoreList";
import {LikeBadge} from "../../Reused/likeBadge";


const LikedAlbums = ({userId}) => {
  const [loading, setLoading] = useState(true);
  const [albumData, updateAlbumData] = useState([]);

  const fetchLikedAlbumsData = async () => {
    const likedAlbums = await getLikedAlbums(userId);

    updateAlbumData(likedAlbums.map(album => {
      return {
        imgUrl: album.image,
        stats: LikeBadge(album.likesCount),
        primaryText: album.name,
        secondaryText: album.artist,
        linkUrl: "/details/" + album.spotifyId
      };
    }))
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    updateAlbumData([]);
    fetchLikedAlbumsData();
  }, []);

  const getLikes = () => {
    const likes = albumData.map(data => {
      return (<div key={data.spotifyId}>
        <Link to={`/details/${data.spotifyId}`}
              style={{textDecoration: 'none', color: "black"}}>
          <ListItem>
            <Grid container spacing={2} sx={{m: 0}}>
              <ImageText bigText={data.name} smallText={data.artist}
                         image={data.image}/>
            </Grid>
          </ListItem>
        </Link>
        <Divider/>
      </div>);
    });
    if (albumData.length === 0) {
      return <ListItem>
        <Typography variant="body1">No liked albums yet. Why not like
          some albums?</Typography>
      </ListItem>;

    } else {
      return (
          <SeeMoreList
              title={"Liked Albums"}
              items={albumData}
              noContentMessage={"No Albums Yet..."}/>
      );
    }
  };

  return (
      <div>
        {loading && "Loading..."}
        {!loading && getLikes()}
      </div>
  );
};

export default LikedAlbums;