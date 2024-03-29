import "./JobDetail.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Job } from "../../models/job.model";
import { getDateString } from "../../helpers/helpers";
import { JobService } from "../../services/JobService";
import { FeaturedJobs, HeaderJobDetail, JobDescriptionDetail } from ".";

const JobDetail = () => {
  const { title } = useParams();
  const [job, setJob] = useState<Job | null>(null);
  const [featuredJobs, setfeaturedJobs] = useState<Job[] | null>(null)

  useEffect(() => {
    const findJob = new JobService().getJobByTitle(title)
    const featured = new JobService().getFeaturedJobs(title)

    if (findJob) {
      setJob(findJob);
      setfeaturedJobs(featured)
    }
  }, [title]);
 
  if (!job) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <HeaderJobDetail
        titleDetail={job.jobTitle}
        seniorityDetail={job.seniority}
        salaryDetail={job.salary}
        emailDetail={job.companyMail}
      />
      <div className="row">
        <div className="col-1">
          <JobDescriptionDetail
            titleDetail={job.jobTitle}
            descriptionDetail={job.description}
            imgDetail={job.jobImage}
            companyDetail={job.company}
            postedDetail={getDateString(job.posted)}
          />
        </div>
        <div className="col-2">
          <FeaturedJobs jobs={featuredJobs}/>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
