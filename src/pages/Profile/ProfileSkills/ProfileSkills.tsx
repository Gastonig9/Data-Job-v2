/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import "./ProfileSkills.css";
import { UserService } from "../../../services/UserService";
import { toast } from "react-toastify";

interface ChangeSkillsProps {
  uid: string | undefined;
}

const ProfileSkills: React.FC<ChangeSkillsProps> = ({ uid }) => {
  const [skillInput, setSkillInput] = useState<string>("");
  const [skills, setSkills] = useState<string[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSkillInput(event.target.value);
  };

  const handleAddSkill = () => {
    if (skillInput.trim() !== "") {
      setSkills([...skills, skillInput.trim()]);
      setSkillInput("");
    }
  };

  const handleAddSkillSubmit = async () => {
    try {
      await new UserService().addUserSkill(uid, { skills });
      toast.success("Skills added");
      setSkills([]);
    } catch (error: any) {
      toast.error(error);
    }
  };

  const handleDeleteSkillSubmit = async () => {
    try {
      await new UserService().deleteUserSkill(uid);
      toast.success("Skills empty");
      setSkills([]);
    } catch (error: any) {
      toast.error(error);
    }
  };

  return (
    <div className="profile-skills-container">
      <h1>Your Skills</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter a skill"
          value={skillInput}
          onChange={handleInputChange}
        />
        <button onClick={handleAddSkill}>Add</button>
      </div>
      {skills.length > 0 && (
        <div className="skills-container">
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
          <div className="buttons-skills">
            <button onClick={handleAddSkillSubmit}>Send</button>
            <button onClick={handleDeleteSkillSubmit}>Empty</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileSkills;
