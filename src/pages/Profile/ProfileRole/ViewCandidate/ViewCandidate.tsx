/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import "./ViewCandidate.css";
import { User } from "../../../../models/user.model";
import userDefault from "../../../../assets/user-icon.png";
import { UserService } from "../../../../services/UserService";
import { toast } from "react-toastify";

interface ViewCandidateProps {
  uid: string | undefined;
  candidate: User;
  onClose: () => void;
  updateApplicantsList: React.Dispatch<React.SetStateAction<User[]>>;
}

export const ViewCandidate: React.FC<ViewCandidateProps> = ({
  uid,
  candidate,
  onClose,
  updateApplicantsList,
}) => {
  const handleDeleteJobRequest = async (aId: string | undefined) => {
    try {
      const deleteApplicant = await new UserService().deleteUserJobRequest(
        uid,
        aId
      );
      if (deleteApplicant.status === 200) {
        toast.success(deleteApplicant.message);
        updateApplicantsList((prevApplicants) =>
          prevApplicants.filter((ap) => ap.user._id !== candidate._id)
        );
      }
    } catch (error: any) {
      toast.error(error);
    }
  };
  return (
    <div className="view-absolute-contain">
      <div className="view-ap-contain">
        <div className="view-c-image">
          <img
            src={candidate.imageProfile || userDefault}
            alt="Image view profile"
          />
        </div>
        <div className="view-c-data">
          <h1>{candidate.fullname} has applied to one of your offers</h1>
          <p>{candidate.description}</p>
          <p>
            <span>Location:</span> {candidate.location}
          </p>
          <p>
            <span>Phone:</span> {candidate.phone}
          </p>
          <p>
            <span>Email:</span> {candidate.email}
          </p>
          <p>
            <span>Skills:</span>{" "}
            {candidate && candidate.skills
              ? candidate.skills.join(", ")
              : "The user has not added skills"}
          </p>
        </div>
      </div>
      <div className="vie-ap-buttons">
        <button style={{ backgroundColor: "green" }} className="see">
          Mark as seen
        </button>
        <button
          onClick={() => {
            handleDeleteJobRequest(candidate._id);
          }}
          style={{ backgroundColor: "red" }}
        >
          Delete
        </button>
        <button style={{ backgroundColor: "#2a3843" }} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};
