

import React from "react";
import './Card.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const SearchBar = () => {
    return (
        <div className="m-3 search">
            <input type="search" className="form-control form rounded-pill" id="input1"
                placeholder="Search for a song, mood, or artist" />
        </div>
    );

}
export default SearchBar;