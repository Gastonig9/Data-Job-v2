import React from "react";
import "./InputSelect.css";
import { seniority, categories, countries } from "../../../assets/constants";

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
          <option value="part-time">Part Time</option>
          <option value="full-time">Full Time</option>
        </select>
        <select required name="modality" onChange={handleSelectChange}>
          <option value="">
            Select a modality <span>*</span>
          </option>
          <option value="remote">Remote</option>
          <option value="hybrid">Hybrid</option>
          <option value="in person">In Person</option>
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
        <select required name="country" onChange={handleSelectChange}>
          <option value="">
            Select a country <span>*</span>
          </option>
          {countries.map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
``;
