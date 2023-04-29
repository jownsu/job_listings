import React from "react";
import "./filter_item.scss";

const FilterItem: React.FC<{
	filter: string;
	removeFilter: (filter: string) => void;
}> = (props) => {
	const { filter, removeFilter } = props;

	return (
		<li className="filter_item">
			<button
				type="button"
				onClick={() => removeFilter(filter)}
			>
				{filter}
				<span></span>
			</button>
		</li>
	);
};

export default FilterItem;
