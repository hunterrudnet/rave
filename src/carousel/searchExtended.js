
import React from "react";
import './card.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import SearchBar from "./searchBar.js"
import Filter from "./filter.js"

const SearchExtended = () => {
    return (
        <div class="row">
            <div class="col-4">
                <SearchBar />
            </div>
            <div class="col-8 text-white">
                <Filter />
                <Filter />
            </div>
        </div>
    );
}

export default SearchExtended;
