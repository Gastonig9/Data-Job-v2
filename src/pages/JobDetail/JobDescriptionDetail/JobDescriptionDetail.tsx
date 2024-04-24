/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { MouseEvent, useEffect, useState } from "react";
import "./JobDescriptionDetail.css";
import { UserService } from "../../../services/UserService";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

interface JobDescriptionProps {
  uid: string | undefined;
  jobId: string | undefined;
  titleDetail: string;
  imgDetail: string;
  descriptionDetail: string;
  postedDetail: string;
  companyDetail: string;
  linkedinDetail: string | null;
  author: string | undefined;
}

export const JobDescriptionDetail: React.FC<JobDescriptionProps> = ({
  uid,
  jobId,
  descriptionDetail,
  postedDetail,
  companyDetail,
  titleDetail,
  linkedinDetail,
  author,
}) => {
  const [jobeSaved, setjobeSaved] = useState<boolean>(false);

  useEffect(() => {
    const savedJob = localStorage.getItem(`savedJob_${jobId}_${uid}`);
    if (savedJob) {
      setjobeSaved(true);
    }
  }, [jobId, uid]);

  const handleSaveJob = async (
    e: MouseEvent<HTMLElement>,
    jobId: string | undefined
  ) => {
    e.preventDefault();
    try {
      const jobToSave = await new UserService().saveJobInUserProfile(
        uid,
        jobId
      );
      const verify = jobToSave.error ? true : false;
      if (verify) {
        toast.error(jobToSave.error);
        setjobeSaved(true);
      } else {
        toast.success("Job saved");
        setjobeSaved(true);
      }
      // Guardar el estado en el localStorage para el usuario actual
      localStorage.setItem(`savedJob_${jobId}_${uid}`, "true");
    } catch (error: any) {
      toast.error(error);
    }
  };

  const handleApplyToJob = async (
    e: MouseEvent<HTMLElement>,
    jobId: string | undefined
  ) => {
    e.preventDefault();
    try {
      const apply = await new UserService().sendApplyUser(uid, jobId);
      if (apply.status === 401) {
        toast.error(apply.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
      if (apply.status === 400) {
        toast.error(apply.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
      if (apply.status === 200) {
        toast.success(apply.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (error: any) {
      toast.warning(error, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div className="description-contain">
      <img src="https://i.ibb.co/FzfGSWy/job-icon.jpg" alt="Job Image" />
      <div className="title-detail">
        <h3>{titleDetail}</h3>
        {uid && (
          <i
            className={`${
              jobeSaved ? "fa-solid fa-bookmark" : "fa-regular fa-bookmark"
            }`}
            onClick={(e) => {
              handleSaveJob(e, jobId);
            }}
          ></i>
        )}
      </div>
      <hr />
      <div className="posted-datail">
        <h4>
          <i className="fa-solid fa-calendar-days"></i> Posted {postedDetail}
        </h4>
        <h4>
          <i className="fa-solid fa-building"></i> By {companyDetail}
        </h4>
      </div>
      <div className="description">
        <p>{descriptionDetail}</p>
      </div>
      <div className="buttons-apply">
        {author && (
          <button
            onClick={(e) => {
              handleApplyToJob(e, jobId);
            }}
            className="toCompany"
          >
            Apply
          </button>
        )}
        {linkedinDetail && (
          <Link to={linkedinDetail}>
            <button className="toLinkedin">Apply in Linkedin</button>
          </Link>
        )}
      </div>
    </div>
  );
};
