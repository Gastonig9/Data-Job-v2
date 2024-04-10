import React, { useState } from "react";
import "./JobsView.css";
import { Div } from "../../../components/Div/Div";
import { Link } from "react-router-dom";
import { Job } from "../../../models/job.model";

interface JobsViewProps {
  jobs: Job[];
}

export const JobsView: React.FC<JobsViewProps> = ({ jobs }) => {
  const [jobsToShow, setJobsToShow] = useState<number>(3);

  const handleShowMoreJobs = () => {
    const remainingJobs = jobs.length - jobsToShow;
    const nextJobsToShow = remainingJobs > 3 ? jobsToShow + 3 : jobs.length;
    setJobsToShow(nextJobsToShow);
  };

  return (
    <div className="job-contain">
      <Div title="Jobs" />
      <div className="jobs-vw-contain">
        {jobs.slice(0, jobsToShow).map((job, index) => {
          return (
            <div key={index} className="card-job">
              <img src={"https://i.ibb.co/NjHMWzB/job-icon.jpg"} alt="" />
              <div className="info-job-contain">
                <h1>{job.jobTitle}</h1>
                <h3>{job.modality}</h3>
                <div className="more-info">
                  <h6>{job.location}</h6>
                  <h6>
                    <span style={{ color: "green" }}>$</span> {job.salary}
                  </h6>
                  <h6>{job.company}</h6>
                  <h6>{job.workday}</h6>
                </div>
              </div>
              <div className="apply-job">
                <Link to={`/view-job/${job.jobTitle}`}>
                  <button>Apply now</button>
                </Link>
                {job.linkedin && <button>Linkedin</button>}
              </div>
            </div>
          );
        })}
      </div>
      {jobsToShow < jobs.length && (
        <div className="show-more-container">
          <button onClick={handleShowMoreJobs}>Show more</button>
        </div>
      )}
      {jobs.length === 0 && (
        <div className="no-jobs-container">
          <p>No more jobs available.</p>
        </div>
      )}
    </div>
  );
};
