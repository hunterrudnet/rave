
import React from "react";
import './Card.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Filter = () => {
    return (
        <select class="form-select filter m-3 float-start">
            <option selected>Filter 1</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>
    );
}

export default Filter;
