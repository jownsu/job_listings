type JobItemProps = {
    id        : number;
    company   : string;
    logo      : string;
    new       : boolean;
    featured  : boolean;
    position  : string;
    role      : string;
    level     : string;
    postedAt  : string;
    contract  : string;
    location  : string;
    languages : string[];
    tools     : string[];
};

class Job {

    id        : number;
    company   : string;
    logo      : string;
    new       : boolean;
    featured  : boolean;
    position  : string;
    role      : string;
    level     : string;
    postedAt  : string;
    contract  : string;
    location  : string;
    languages : string[];
    tools     : string[];

    constructor(job: JobItemProps){
        this.id        = job.id;
        this.company   = job.company;
        this.logo      = job.logo;
        this.new       = job.new;
        this.featured  = job.featured;
        this.position  = job.position;
        this.role      = job.role;
        this.level     = job.level;
        this.postedAt  = job.postedAt;
        this.contract  = job.contract;
        this.location  = job.location;
        this.languages = job.languages;
        this.tools     = job.tools;
    }
}

export default Job;