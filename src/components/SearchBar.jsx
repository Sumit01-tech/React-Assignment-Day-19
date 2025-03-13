import React from "react";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../redux/actions";

const SearchBar = () => {
    const dispatch = useDispatch();

    const handleSearch = (e) => {
        dispatch(setSearchTerm(e.target.value));
    };

    return (
        <input
            type="text"
            placeholder="Search posts..."
            onChange={handleSearch}
            style={{ padding: "8px", marginBottom: "10px", width: "100%" }}
        />
    );
};

export default SearchBar;
