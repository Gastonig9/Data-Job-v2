import { Input } from "../../../components/Input/Input";
import { Div } from "../../../components/Div/Div";
import "./PostJobForm.css";
import { InputSelect } from "../InputSelect/InputSelect";
import React, { useState } from "react";
import { Job } from "../../../models";
import { UploadImage } from "../../../components/UploadImage/UploadImage";
import { usePostJobMutation } from "../../../services/apiJobService";
import { Loader } from "../../../components/Loader/Loader";
import { useJwt } from "react-jwt";
import { User } from "../../../models/user.model";

export const PostJobForm = () => {
  const token = localStorage.getItem("token");
  const { decodedToken } = useJwt<User>(token || "");
  const [postJob, { isError, isLoading, isSuccess, error }] =
    usePostJobMutation();
  const date = new Date();

  const [charCount, setCharCount] = useState(0);
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
    posted: date,
    country: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setDataPost((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setCharCount(e.target.value.length);
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setDataPost((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageUpload = (imageData: string) => {
    setDataPost((prevState) => ({
      ...prevState,
      jobImage: imageData,
    }));
  };

  const handlePostJob: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();
    if (isError) {
      console.log(error);
    }
    const postData = await postJob({
      newJob: dataPost,
      userId: decodedToken?.userId,
    });
    setDataPost({
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
      jobImage: "",
      posted: date,
      country: "",
    });
    console.log(postData);
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
      <Input handleInputChange={handleInputChange} count={charCount} />
      <InputSelect handleSelectChange={handleSelectChange} />
      <UploadImage onImageUpload={handleImageUpload} />
      <div className="button-post">
        {isSuccess ? (
          <button disabled className="btn-success">
            Job was posted
          </button>
        ) : isError ? (
          <button disabled className="btn-error">
            An error occurred
          </button>
        ) : (
          <button className="btn-submit" type="submit">
            {isLoading ? (
              <Loader isForButton={true} isForPage={false} />
            ) : (
              "Post a Job"
            )}
          </button>
        )}
      </div>
    </form>
  );
};
