/* eslint-disable @typescript-eslint/no-explicit-any */
// ProfileRole.tsx
import React, { useEffect, useState } from "react";
import "./ProfileRole.css";
import { UserService } from "../../../services/UserService";
import { User } from "../../../models/user.model";
import userDefault from "../../../assets/user-icon.png";
import { ViewCandidate } from "./ViewCandidate/ViewCandidate";
import { Job } from "../../../models";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

interface ProfileRoleProps {
  uid: string | undefined;
  role: string | undefined;
}

export const ProfileRole: React.FC<ProfileRoleProps> = ({ uid, role }) => {
  const [applicants, setApplicants] = useState<User[]>([]);
  const [jobsSaved, setjobsSaved] = useState<Job[]>([]);
  const [selectedCandidate, setSelectedCandidate] = useState<User | null>(null);

  useEffect(() => {
    const getJobsSave = async () => {
      try {
        const jobsSave = await new UserService().getUserSavedJobs(uid);
        console.log(jobsSave);
        if (jobsSave.message && Array.isArray(jobsSave.message)) {
          setjobsSaved(jobsSave.message);
          console.log(jobsSave)
        }
        
      } catch (error: any) {
        toast.error(error);
      }
    };

    getJobsSave();
  }, [uid]);

  useEffect(() => {
    const getApplicants = async () => {
      try {
        const response = await new UserService().getUserRequestJobs(uid);
        if (response.message && Array.isArray(response.message)) {
          setApplicants(response.message);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getApplicants();
  }, [uid]);

  const handleViewCandidate = (candidate: User) => {
    setSelectedCandidate(candidate);
  };

  const handleDeleteCandidate = async (candidateId: string) => {
    try {
      await new UserService().deleteUserJobRequest(uid, candidateId);
      const updatedApplicantsResponse =
        await new UserService().getUserRequestJobs(uid);
      if (
        updatedApplicantsResponse.message &&
        Array.isArray(updatedApplicantsResponse.message)
      ) {
        setApplicants(updatedApplicantsResponse.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="profile-role-contain">
      {role && role === "company" ? (
        <>
          {applicants && applicants.length > 0 ? (
            <>
              <h1>You have new requests</h1>
              {applicants.map((ap, index) => (
                <div key={index} className="applicant">
                  <div className="img-name">
                    <img src={ap.user.imageProfile || userDefault} alt="" />
                    <h1>{ap.user.fullname}</h1>
                    <p>Applying for: {ap.jobTo}</p>
                  </div>
                  <button onClick={() => handleViewCandidate(ap.user)}>
                    View candidate
                  </button>
                </div>
              ))}

              {selectedCandidate && (
                <ViewCandidate
                  uid={uid}
                  candidate={selectedCandidate}
                  onDelete={() =>
                    handleDeleteCandidate(selectedCandidate.user._id)
                  }
                  onClose={() => setSelectedCandidate(null)}
                  updateApplicantsList={setApplicants}
                />
              )}
            </>
          ) : (
            <h1>You have no requests</h1>
          )}
        </>
      ) : (
        <div className="card-results">
          {jobsSaved && jobsSaved.length > 0 ? (
            jobsSaved.map((job, index) => (
              <div key={index} className="card-result">
                <div className="info">
                  <h2>{job?.jobTitle}</h2>
                  <p>
                    Location: <strong>{job?.location}</strong>
                  </p>
                  <p>
                    Salary: <strong>{job?.salary}</strong>
                  </p>
                </div>
                <div className="buttons">
                  <Link to={`/view-job/${job?.jobTitle}`}>
                    <button>Apply now</button>
                  </Link>
                  {job?.linkedin && <button>Linkedin</button>}
                </div>
              </div>
            ))
          ) : (
            <h1>No jobs saved</h1>
          )}
        </div>
      )}
    </div>
  );
};
