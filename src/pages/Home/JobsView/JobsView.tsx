import "./JobsView.css";
import { jobs } from "../../../assets/constants";
import { Div } from "../../../components/Div/Div";

export const JobsView = () => {
  return (
    <div className="job-contain">
      <Div title="Jobs" />
      <div className="jobs-vw-contain">
        {jobs.map((job, index) => {
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
                <button>Apply now</button>
                {job.linkedin && <button>Linkedin</button>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
