import "./job_item.scss";
import Job from "../../models/job";

const JobItem: React.FC<{
	job: Job;
	addFilter: (filter: string) => void;
}> = (props) => {
	const {
		company,
		logo,
		is_new,
		featured,
		position,
		role,
		level,
		postedAt,
		contract,
		location,
		languages,
		tools,
	} = props.job;

	const { addFilter } = props;

	return (
		<li className={`job_item ${featured ? "active" : ""}`}>
			<div className="main_info">
				<img
					src={logo}
					alt={`${company} logo`}
				/>
				<div>
					<div className="company_name">
						<h3>{company}</h3>
						{is_new && <span className="new">New!</span>}
						{featured && <span className="featured">Featured</span>}
					</div>
					<h2>{position}</h2>
					<div className="company_info">
						<p>{postedAt}</p>
						<span></span>
						{contract}
						<span></span>
						{location}
					</div>
				</div>
			</div>
			<div className="filters">
				<button
					type="button"
					className="filter"
					onClick={() => addFilter(role)}
				>
					{role}
				</button>
				<button
					className="filter"
					onClick={() => addFilter(level)}
				>
					{level}
				</button>
				{languages.map((language, index) => (
					<button
						key={index}
						type="button"
						className="filter"
						onClick={() => addFilter(language)}
					>
						{language}
					</button>
				))}
				{tools.map((tool, index) => (
					<button
						key={index}
						type="button"
						className="filter"
						onClick={() => addFilter(tool)}
					>
						{tool}
					</button>
				))}
			</div>
		</li>
	);
};

export default JobItem;
