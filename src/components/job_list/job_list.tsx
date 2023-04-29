import React from "react";
import JobItem from "../job_item/job_item";
import Job from "../../models/job";
import "./job_list.scss";

const JobList: React.FC<{
	jobs: Job[];
	addFilter: (filter: string) => void;
}> = (props) => {
	const { jobs, addFilter } = props;

	return (
		<main className="container">
			<ul className="job_list">
				{jobs.map((job) => (
					<JobItem
						key={job.id}
						job={job}
						addFilter={addFilter}
					/>
				))}
			</ul>
		</main>
	);
};

export default JobList;
