import { useEffect, useState } from "react";
import "./Skills.css";

interface SkillsProps {
  skills: string[] | undefined;
}

export const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const [skillsInProfile, setskillsInProfile] = useState<string[] | undefined>([]);
  const colors = ["#FF5733", "#33FF6B", "#338CFF", "#FF33EB", "#FFE333"];

  useEffect(() => {
    setskillsInProfile(skills);
  }, [skills]);

  return (
    <div className="skills-container">
      <h2>Skills</h2>
      <div className="skill">
        {skillsInProfile && skillsInProfile.map((s, index) => (
          <h3 key={index} style={{ backgroundColor: colors[index % colors.length] }}>
            {s}
          </h3>
        ))}
      </div>
    </div>
  );
};
