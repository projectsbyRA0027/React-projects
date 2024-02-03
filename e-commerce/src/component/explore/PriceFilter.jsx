import React from "react";
import "./PriceFilter.css";

function PriceFilter({PriceFilter,handlePriceFilter}){
    return(
    <div className="price-filter_wrapper">
        <label htmlFor="price-filter">Sort by:</label>
        <select id="price-filter" value={PriceFilter} onChange={handlePriceFilter}>
            <option value="default" disabled hidden>
                select an option
            </option>
            <option value="high-to-low">(price)Highest to Lowest</option>
            <option value="low-to-high">(price)Lowest to Highest</option>
        </select>
    </div>
    );
}

export default PriceFilter;