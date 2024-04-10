import React from "react";
import { Job } from "../../../models/job.model";
import "./FeaturedJobs.css";

interface FeaturedJobsProps {
  jobs: Job[] | undefined;
}

export const FeaturedJobs: React.FC<FeaturedJobsProps> = ({ jobs }) => {
  console.log("featured ", jobs)
  return (
    <div className="featured-contain">
      <div className="featured-title">
        <h2>Featured Jobs</h2>
        <div className="one-featured">
          <div className="one"></div>
          <div className="two"></div>
        </div>
      </div>

      <div className="featured-jobs">
        {jobs?.map((featuredJob) => { // Utilizando el operador de fusión opcional para verificar si jobs no es undefined
          return (
            <>
              <a key={featuredJob.jobTitle} href={`/view-job/${featuredJob.jobTitle}`}>
                <div className="f-job-card">
                  <h2>{featuredJob.jobTitle}</h2>
                  <h4>{featuredJob.company}</h4>
                  <h5>{featuredJob.modality}</h5>
                </div>
              </a>

              <hr />
            </>
          );
        })}
      </div>
    </div>
  );
};
