import "./job_item.scss";

type JobItemProps = {
    id: number;
    company: string;
    logo: string;
    is_new: boolean;
    featured: boolean;
    position: string;
    role: string;
    level: string;
    postedAt: string;
    contract: string;
    location: string;
    languages: string[];
    tools: string[]
};

const JobItem: React.FC<{job: JobItemProps}> = (props) => {
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
        tools
    } = props.job;
    
    return (
        <li className={ featured ? "active" : "" }>
            <div className="main_info">
                <img src={logo} alt={`${company} logo`} />
                <div>
                    <div className="company_name">
                        <h3>{company}</h3>
                        { is_new && <span className="new">New!</span> }
                        { featured && <span className="featured">Featured</span> }
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
                <button type="button" className="filter">{role}</button>
                <button className="filter">{level}</button>
                {
                    languages.map(language => <button type="button" className="filter">{language}</button>)
                }
                {
                    tools.map(tool => <button type="button" className="filter">{tool}</button>)
                }
            </div>
        </li>
    )
}

export default JobItem;