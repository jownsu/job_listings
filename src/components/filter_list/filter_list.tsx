import React from "react";
import FilterItem from "../filter_item/filter_item";
import "./filter_list.scss";

const FilterList: React.FC<{filters: string[]}> = (props) => {
    return (
        <div className="filter_list_container">
            <ul className="filter_list">
                {props.filters.map(filter => <FilterItem filter={filter} />)}
            </ul>
            <button type="button" className="btn_clear">Clear</button>
        </div>
    )
}

export default FilterList