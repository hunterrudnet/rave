
import React from "react";
import './Card.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import SearchBar from "./SearchBar.js"
import Filter from "./Filter.js"

const SearchExtended = () => {
    return (
        <div class="row">
            <div class="col">
                <SearchBar />
            </div>
            <div class="col text-white">
                <Filter />
                <Filter />
            </div>
        </div>
    );
}

export default SearchExtended;