
import React from "react";
import './Card.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import SearchBar from "./SearchBar.js"
import Filter from "./Filter.js"

const SearchExtended = () => {
    return (
        <div className="row">
            <div className="col">
                <SearchBar />
            </div>
            <div className="col text-white">
                <Filter />
                <Filter />
            </div>
        </div>
    );
}

export default SearchExtended;