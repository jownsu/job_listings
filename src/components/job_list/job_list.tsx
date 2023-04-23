import JobItem from "../job_item/job_item";
import job_data from "../../assets/data.json";
import "./job_list.scss";

const JobList = () => {
    return (
        <ul>
            {job_data.map(job => <JobItem job={job}/>)}
        </ul>
    )
}

export default JobList;