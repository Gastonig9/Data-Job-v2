import "./Input.css";
import { inputText } from "../../assets/constants";
import { isInputNumber } from "../../helpers/helpers";
import React from "react";

interface InputProps {
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export const Input: React.FC<InputProps> = ({ handleInputChange }: InputProps) => {
  return (
    <div className="input-contain">
      {inputText.map((input, index) => (
        <div key={index} className="input-label">
          {input.id === "description" ? (
            <>
              <label htmlFor={input.name}>{input.label} {input.required ? <span>*</span> : ""}</label>
              <textarea required onChange={handleInputChange} name={input.name}></textarea>
            </>
          ) : (
            <>
              <label htmlFor={input.name}>{input.label} {input.required ? <span>*</span> : ""}</label>
              <input
                autoComplete="off"
                type={isInputNumber(input.type)}
                name={input.name}
                onChange={handleInputChange}
                required={input.required}
              />
            </>
          )}
        </div>
      ))}
    </div>
  );
};
