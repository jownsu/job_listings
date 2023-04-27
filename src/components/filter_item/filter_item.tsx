import React from "react";
import "./filter_item.scss";

const FilterItem: React.FC<{filter: string}> = (props) => {
    return (
        <li className="filter_item">
            <button>
                {props.filter}
                <span></span>
            </button>
        </li>
    )
}

export default FilterItem;