import React from "react";
import './card.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Card = () => {
    return (
        <div class="card">
            <img src="https://m.media-amazon.com/images/I/41aLMoRW0HL.jpg" class="card-img-top" alt="..."></img>
            <div class="card-body">
                <h5 class="card-title">Song Title</h5>
                <img src="https://m.media-amazon.com/images/I/41aLMoRW0HL.jpg" class="rounded-circle icon float-start"
                    alt="..."></img>
                <br></br>
                <p class="card-text">
                    &nbsp; Artist Name</p>
                <a href="#" class="btn btn-primary clear">Link</a>
            </div>
        </div>);
}

export default Card;

