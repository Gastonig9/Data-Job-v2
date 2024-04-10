import "./JobDetail.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Job } from "../../models/job.model";
import { JobService } from "../../services/JobService";

import { FeaturedJobs, HeaderJobDetail, JobDescriptionDetail } from ".";
import { Loader } from "../../components/Loader/Loader";

import { useGetJobByTitleQuery } from "../../services/apiJobService";
import { getDateString } from "../../helpers/helpers";
import { User } from "../../models/user.model";
import { useJwt } from "react-jwt";

const JobDetail = () => {
  const token = localStorage.getItem("token");
  const { decodedToken } = useJwt<User>(token || "");
  const { title } = useParams();
  const { data: job } = useGetJobByTitleQuery(title ? title : "");
  const [featuredJobs, setFeaturedJobs] = useState<Job[] | undefined>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const findJob = await new JobService().getJobByTitle(title);
        const featured = await new JobService().getFeaturedJobs(title);
        if (findJob) {
          setFeaturedJobs(featured);
        }
      } catch (error) {
        console.error('Error fetching job:', error);
      }
    };

    fetchData();
  }, [title]);

  if (!job) {
    return <Loader isForButton={false} isForPage={true} />;
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
            uid={decodedToken?.userId}
            jobId={job._id}
            titleDetail={job.jobTitle}
            descriptionDetail={job.description}
            imgDetail={job.jobImage}
            companyDetail={job.company}
            postedDetail={getDateString(job.posted)}
          />
        </div>
        <div className="col-2">
          <FeaturedJobs jobs={featuredJobs} />
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
