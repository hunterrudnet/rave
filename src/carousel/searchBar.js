
import React from "react";
import './card.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const SearchBar = () => {
    return (
        <div class="m-3 search">
            <input type="search" class="form-control form rounded-pill" id="input1"
                placeholder="Search for a song, mood, or artist" />
        </div>
    );

}
export default SearchBar;
