
import React, { Component } from "react";
import './card.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default class SearchBar extends Component {
    render() {
        return (
            <div class="m-3">
                <input type="search" class="form-control form rounded-pill" id="input1"
                    placeholder="Search for a song, mood, or artist"> </input>
            </div>);
    }
}
