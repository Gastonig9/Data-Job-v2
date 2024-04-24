import { Job } from "../models/job.model";
import { BASE_URL } from "../assets/url";

export class JobService {
    private readonly baseUrl = BASE_URL.prod;

    async loadJobs(): Promise<Job[]> {
        try {
            const response = await fetch(`${this.baseUrl}/jobs`);
            if (!response.ok) {
                throw new Error('Failed to fetch jobs');
            }
            const data: Job[] = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching jobs:', error);
            throw error;
        }
    }

    async getJobs(): Promise<Job[]> {
        try {
            const jobs = await this.loadJobs();
            return jobs;
        } catch (error) {
            console.error('Error fetching jobs:', error);
            throw error;
        }
    }

    async getLatestJobs() {
        try {
            const response = await fetch(`${this.baseUrl}/jobs/get-latest-jobs`);
            const data = await response.json()
            return data;
        } catch (error) {
            return error;
        }
    }

    async getJobByTitle(title: string | undefined): Promise<Job | null> {
        try {
            const jobs = await this.loadJobs();
            const findJob = jobs.find((j) => j.jobTitle === title);
            return findJob || null;
        } catch (error) {
            console.error('Error fetching jobs:', error);
            throw error;
        }
    }

    async getJobByCategorieAndCountry(category: string | undefined, country: string | undefined, seniority: string | undefined): Promise<Job[]> {
        try {
            const jobs = await this.loadJobs();
            let filteredJobs = [...jobs];

            if (category) {
                filteredJobs = filteredJobs.filter((job) => job.category === category);
            }
            if (country) {
                filteredJobs = filteredJobs.filter((job) => job.country === country);
            }
            if (seniority) {
                filteredJobs = filteredJobs.filter((job) => job.seniority === seniority);
            }

            // Eliminar duplicados
            const uniqueJobs = Array.from(new Set(filteredJobs.map((job) => job.jobTitle))).map((title) => {
                return filteredJobs.find((job) => job.jobTitle === title);
            });

            return uniqueJobs.filter((job) => job !== undefined) as Job[];
        } catch (error) {
            console.error('Error filtering jobs:', error);
            throw error;
        }
    }

    async getFeaturedJobs(title: string | undefined): Promise<Job[]> {
        try {
            const jobs = await this.loadJobs();
            const findJob = jobs.find((j) => j.jobTitle === title);
            const filterFeaturedJob = jobs.filter((fj) => fj.jobTitle !== findJob?.jobTitle);
            const featuredJobs = filterFeaturedJob.slice(0, 3);
            return featuredJobs;
        } catch (error) {
            console.error('Error fetching featured jobs:', error);
            throw error;
        }
    }

    async postJob(job: Job): Promise<{ success: boolean; data?: Job; error?: string }> {
        try {
            const response = await fetch(`${this.baseUrl}/jobs`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(job)
            });
    
            if (!response.ok) {
                const errorMessage = `Fetch error: ${response.statusText}`;
                return { success: false, error: errorMessage };
            }
    
            const responseData = await response.text();
            if (!responseData) {
                return { success: true }; // No hay datos para devolver
            }
    
            // Intentar analizar la respuesta como JSON
            const data = JSON.parse(responseData) as Job;
            return { success: true, data };
        } catch (error) {
            const errorMessage = `Error posting job: ${error}`;
            return { success: false, error: errorMessage };
        }
    }
    
    
}
