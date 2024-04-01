import React from "react";
import "./InputSelect.css";
import { seniority, categories } from "../../../assets/constants";

interface InputSelectProps {
  handleSelectChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const InputSelect: React.FC<InputSelectProps> = ({
  handleSelectChange,
}) => {
  return (
    <div className="select-contain">
      <div className="options">
        <select required name="seniority" onChange={handleSelectChange}>
          <option value="">
            Select a seniority <span>*</span>
          </option>
          {seniority.map((senior, index) => (
            <option key={index} value={senior}>
              {senior}
            </option>
          ))}
        </select>
        <select required name="workday" onChange={handleSelectChange}>
          <option value="">
            Select a workday <span>*</span>
          </option>
          <option value="Part Time">Part Time</option>
          <option value="Full Time">Full Time</option>
        </select>
        <select required name="modality" onChange={handleSelectChange}>
          <option value="">
            Select a modality <span>*</span>
          </option>
          <option value="Remote">Remote</option>
          <option value="Hybrid">Hybrid</option>
          <option value="In Person">In Person</option>
        </select>
        <select required name="category" onChange={handleSelectChange}>
          <option value="">
            Select a category <span>*</span>
          </option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
``;
