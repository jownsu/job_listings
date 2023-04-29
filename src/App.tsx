import { useState, useEffect } from "react";
import JobList from "./components/job_list/job_list";
import FilterList from "./components/filter_list/filter_list";
import job_data from "./assets/data.json";
import Job from "./models/job";
import "./assets/sass/index.scss";

function App() {
	const [filters, setFilters] = useState<string[]>([]);
    const [jobs, setJobs] = useState<Job[]>(job_data)

    useEffect(() => {
        filterJobs();
    }, [filters])

	const addFilter = (filter: string) => {
		if (!filters.find((fltr) => fltr === filter)) {

			setFilters((prevFilters) => {
				return [...prevFilters, filter];
			});
		}
	};

    const filterJobs = () => {
        if(filters.length){
            let newArr: Job[] = [];
            newArr = job_data.filter((job) => 
                filters.includes(job.role) || 
                filters.includes(job.level) ||
                filters.some(val => job.languages.includes(val)) ||            
                filters.some(val => job.tools.includes(val))
            );
            setJobs(newArr);
        }
        else{
            setJobs(job_data);
        }
    }

	const removeFilter = (filter: string) => {
		setFilters((prevFilters) => {
			return prevFilters.filter((prevFilter) => prevFilter !== filter);
		});
	};

	const clearFilter = () => {
		setFilters([]);
	};

	return (
		<>
			<nav>
				<div className="container">
					{!!filters.length && (
						<FilterList
							filters={filters}
							removeFilter={removeFilter}
							onClearClick={clearFilter}
						/>
					)}
				</div>
			</nav>
			<JobList
				jobs={jobs}
				addFilter={addFilter}
			/>
		</>
	);
}

export default App;
