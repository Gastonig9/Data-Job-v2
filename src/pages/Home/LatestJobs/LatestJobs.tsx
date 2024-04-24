/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import "./LatestJobs.css";
import { Div } from "../../../components/Div/Div";
import { Job } from "../../../models";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { JobService } from "../../../services/JobService";

export const LatestJobs = () => {
  const [latestJobs, setlatestJobs] = useState<Job[]>([]);
  const [jobsToShow, setJobsToShow] = useState<number>(3);

  useEffect(() => {
    const getLatestJobs = async () => {
      try {
        const jobsLatest = await new JobService().getLatestJobs();
        setlatestJobs(jobsLatest.latestJobs);
      } catch (error: any) {
        toast.error(error);
      }
    };
    getLatestJobs();
  }, []);

  const handleShowMoreJobs = () => {
    const remainingJobs = latestJobs.length - jobsToShow;
    const nextJobsToShow = remainingJobs > 3 ? jobsToShow + 3 : latestJobs.length;
    setJobsToShow(nextJobsToShow);
  };

  return (
    <div className="latest-jobs-contain">
      <Div title="Latest jobs" />
      <div className="jobs-vw-contain">
        {latestJobs.slice(0, jobsToShow).map((job, index) => {
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
                {job.linkedin && (
                  <Link to={job.linkedin}>
                    <button>Linkedin</button>
                  </Link>
                )}
              </div>
            </div>
          );
        })}
      </div>
      {jobsToShow < latestJobs.length && (
        <div className="show-more-container">
          <button onClick={handleShowMoreJobs}>Show more</button>
        </div>
      )}
      {latestJobs.length === 0 && (
        <div className="no-jobs-container">
          <p>No more jobs available.</p>
        </div>
      )}
    </div>
  );
};
