import React from "react";
import './Card.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Rating from '@mui/material/Rating';

const Card = () => {
    return (
        <div className="card">
            <img src="https://m.media-amazon.com/images/I/41aLMoRW0HL.jpg" className="card-img-top rounded-bottom" alt="..."></img>
            <div className="card-body rounded-bottom">
                <h5 className="card-title">Song Title</h5>
                <br></br>
                <img src="https://m.media-amazon.com/images/I/41aLMoRW0HL.jpg" className="rounded-circle icon float-start"
                    alt="..."></img>
                <p className="card-text">
                    Artist Name</p>
                <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
            </div>
        </div>);
}

export default Card;