import React from "react";
import FilterItem from "../filter_item/filter_item";
import "./filter_list.scss";

const FilterList: React.FC<{
	filters: string[];
	onClearClick: () => void;
	removeFilter: (filter: string) => void;
}> = (props) => {
	const { filters, onClearClick, removeFilter } = props;

	return (
		<div className="filter_list_container">
			<ul className="filter_list">
				{filters.map((filter, index) => (
					<FilterItem
						key={index}
						filter={filter}
						removeFilter={removeFilter}
					/>
				))}
			</ul>
			<button
				type="button"
				className="btn_clear"
				onClick={onClearClick}
			>
				Clear
			</button>
		</div>
	);
};

export default FilterList;
