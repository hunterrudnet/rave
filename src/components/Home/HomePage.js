// import {useAuth0} from "@auth0/auth0-react";
import React, {useEffect, useState} from "react";
import "../Reused/reused.css";
import {Badge, CardMedia, Grid, Typography} from "@mui/material";
import SeeMoreList from "../SeeMoreList/SeeMoreList.tsx";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {getAllReviews, getReviewsForUserFollowings} from "../../services/reviews-service";
import {getAllAlbums} from "../../services/album-service";
import {useSelector} from "react-redux";
import Reviews from "../Reviews/Reviews";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { red } from '@mui/material/colors';
import {getAllUsers} from "../../services/user-service";
import {getWhoFollowsUser} from "../../services/following-service";
import {getLikedAlbums} from "../../services/likes-service";
import ImageText from "../Reused/ImageText";

function LikeBadge(count) {
    return (
        <Badge badgeContent={count} color="primary">
            <FavoriteIcon style={{color: red[500]}}/>
        </Badge>
    );
}


const HomePage = () => {
    // const {isAuthenticated, isLoading} = useAuth0();
    let {loggedInUser, loading, loggedIn} = useSelector(
        state => state.loggedInUserData);
    const [reviewsData, updateReviewsData] = useState([]);
    const [albumsData, updateAlbumsData] = useState([]);
    const [usersData, updateUsersData] = useState([]);
    const [reviewsLoading, setReviewsLoading] = useState(true);
    const getReviewHeader = (review) => {
        const album = review.Album;
        return <ImageText bigText={album.name} smallText={album.artist}
                          image={album.image}/>;
    };

    const fetchReviewsData = async () => {
        let reviews;
        if (loggedIn) {
            reviews = await getReviewsForUserFollowings(loggedInUser.id);
        } else {
            reviews = await getAllReviews();
        }
        updateReviewsData(reviews);
        setReviewsLoading(false);
    };

    const fetchAlbumsData = async () => {
        let albums;
        if (loggedIn) {
            albums = await getLikedAlbums(loggedInUser.id);
        } else {
            albums = await getAllAlbums();
        }

        updateAlbumsData(albums.map(album => {
            return {
                imgUrl: album.image,
                stats: LikeBadge(album.likesCount),
                primaryText: album.name,
                secondaryText: album.artist,
                linkUrl: "/details/" + album.spotifyId
            }
        }));
    };

    const fetchUsersData = async () => {
        let users;
        if (loggedIn) {
            users = await getWhoFollowsUser(loggedInUser.id);
        } else {
            users = await getAllUsers();
        }
        updateUsersData(users.map(user => {
            return {
                imgUrl: user.image,
                primaryText: user.username,
                linkUrl: "/profile/" + user.username
            }
        }));
    };

    useEffect(() => {
        if (!loading) {
            setReviewsLoading(true);
            updateReviewsData([]);
            updateAlbumsData([]);
            updateUsersData([]);
            fetchAlbumsData();
            fetchReviewsData();
            fetchUsersData();
        }
    }, [loading, loggedIn]);

    if (loading) {
        return <div>Loading ...</div>;
    }
    return (
        <div>
            <div>
                <Card>
                    <CardMedia
                        style={{height: 350, maxWidth: '100%'}}
                        image="data:image/jpeg;base64,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"
                        title="Rave"
                    />
                    <CardContent style={
                        {
                            position: "absolute",
                            width: '100%',
                            top: '81px',
                            color: 'white',
                            backgroundColor: "rgba(52,52,52,0.55)",
                            textAlign: "center",
                            padding: 5,
                        }
                    }>
                        <Typography variant="h1" component="h5">
                           Rave
                        </Typography>
                        <Typography variant="h3" component="h5">
                            Find your new favorite album
                        </Typography>
                    </CardContent>
                </Card>
            </div>
            <Grid container spacing={2} sx={{m: 0}} style={{width: "100% "}}>
                <Grid item xs={12} md={3} sx={{p: 1}}>
                    <SeeMoreList title={loggedIn ? "Your Favorite Albums" : "Popular Albums"}
                                 items={albumsData}
                                 noContentMessage={"No Albums Yet..."}/>
                    <SeeMoreList title={loggedIn ? "Newest Followers" : "Newest Members"}
                                 items={usersData}
                                 noContentMessage={"No Followers Yet..."}/>
                </Grid>
                <Grid item xs={0} md={7}>
                    <Reviews reviews={reviewsData}
                             loading={reviewsLoading}
                             getReviewHeader={getReviewHeader}
                             headerText={loggedIn ? "Reviews From Your Follows" : "Recent Reviews"}/>
                </Grid>
            </Grid>
        </div>
    );
};


export default HomePage;