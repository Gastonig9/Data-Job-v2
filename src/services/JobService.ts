import { Job } from "../models/job.model";
import { jobs } from "../assets/constants";

export class JobService {
    private jobs: Job[];

    constructor() {
        this.jobs = jobs;
    }

    getJobs() {
        return this.jobs;
    }

    getJobByTitle(title: string | undefined) {
        try {
            const findJob = this.jobs.find((j) => j.jobTitle === title)
            return findJob;
        } catch (error) {
            throw new Error("No job founded")
        }
    }

    getJobByCategorieAndCountry(category: string | undefined, country: string | undefined, seniority: string | undefined) {
        if(!category && !country && !seniority) return this.jobs
        
        const getCategory = category ? this.jobs.filter((job) => job.category === category) : [];
    
        const getCountry = country ? this.jobs.filter((job) => job.country === country) : [];
    
        const getSeniority = seniority ? this.jobs.filter((job) => job.seniority === seniority) : [];
    
        const allResults = [...getCategory, ...getCountry, ...getSeniority];
    
        const uniqueJobs = new Map<string, Job>();
    
        allResults.forEach((job) => uniqueJobs.set(job.jobTitle, job));
    
        const uniqueResults = Array.from(uniqueJobs.values());
    
        return uniqueResults;
    }
    



    getFeaturedJobs(title: string | undefined) {
        const findJob = this.getJobByTitle(title);
        const filterFeaturedJob = this.jobs.filter((fj) => fj.jobTitle !== findJob?.jobTitle);
        const featuredJobs = filterFeaturedJob.slice(0, 3);

        return featuredJobs;
    }

}
