import React from "react";
import "./JobDescriptionDetail.css";

interface JobDescriptionProps {
  titleDetail: string;
  imgDetail: string;
  descriptionDetail: string;
  postedDetail: string;
  companyDetail: string;
}

export const JobDescriptionDetail: React.FC<JobDescriptionProps> = ({
  descriptionDetail,
  postedDetail,
  companyDetail,
  titleDetail,
}) => {
  return (
    <div className="description-contain">
      <img src="https://i.ibb.co/FzfGSWy/job-icon.jpg" alt="Job Image" />
      <div className="title-detail">
        <h3>{titleDetail}</h3>
        <i className="fa-regular fa-bookmark"></i>
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
    </div>
  );
};
