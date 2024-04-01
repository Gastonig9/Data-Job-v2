import { Input } from "../../../components/Input/Input";
import { Div } from "../../../components/Div/Div";
import "./PostJobForm.css";
import { InputSelect } from "../InputSelect/InputSelect";
import React, { useEffect, useState } from "react";
import { getDateString } from "../../../helpers/helpers";
import { Job } from "../../../models";

export const PostJobForm = () => {
    const date = new Date()

    const [dataPost, setDataPost] = useState<Job>({
        jobTitle: "",
        description: "",
        location: "",
        salary: 0,
        company: "",
        seniority: "",
        category: "",
        workday: "",
        modality: "",
        companyMail: "",
        linkedin: "",
        jobImage: "https://example.com/job-image1.jpg",
        posted: getDateString(date),
        country: ""
      })

      useEffect(() => {
        console.log(dataPost)
      }, [dataPost])
      

    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setDataPost(prevState => ({
            ...prevState,
            [name]: value
        }));

    };

    const handleSelectChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setDataPost(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handlePostJob: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        console.log(dataPost);
    };

  return (
    <form onSubmit={handlePostJob}>
      <div className="post-job-detail-contain">
        <div className="detail">
          <h2>Post a Job</h2>
          <div className="one-detail"></div>
          <div className="two-detail"></div>
        </div>
      </div>
      <Div title="Share your post information" />
      <br />
      <Input handleInputChange={handleInputChange} />
      <InputSelect handleSelectChange={handleSelectChange} />
      <div className="button-post">
        <button type="submit">Post Job</button>
      </div>
    </form>
  );
};
