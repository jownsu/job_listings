import { useState } from "react";
import JobList from "./components/job_list/job_list";
import FilterList from "./components/filter_list/filter_list";
import "./assets/sass/index.scss";

function App() {
    const [filters, setFilters] = useState<string[]>(["Frontend", "CSS", "JavaScript"]);

    return (
        <>
            <nav>
                <div className="container">
                {
                    !!filters.length &&
                    <FilterList filters={filters} />
                }
                </div>
            </nav>        

            <main>
                <div className="container">
                    <JobList />
                </div>
            </main>

        </>
    )
}

export default App
