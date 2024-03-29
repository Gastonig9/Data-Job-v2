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
    
    getFeaturedJobs(title: string | undefined) {
        const findJob = this.getJobByTitle(title);
        const filterFeaturedJob = this.jobs.filter((fj) => fj.jobTitle !== findJob?.jobTitle);
        const featuredJobs = filterFeaturedJob.slice(0, 3);

        return featuredJobs;
    }

}
