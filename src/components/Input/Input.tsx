import "./Input.css";
import { inputText } from "../../assets/constants";
import { isInputNumber } from "../../helpers/helpers";
import React from "react";

interface InputProps {
  handleInputChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  count: number;
}

export const Input: React.FC<InputProps> = ({
  handleInputChange,
  count,
}: InputProps) => {
  return (
    <div className="input-contain">
      {inputText.map((input, index) => (
        <div key={index} className="input-label">
          {input.id === "description" ? (
            <>
              <label htmlFor={input.name}>
                {input.label} {input.required ? <span>*</span> : ""}
              </label>
              <textarea
                required
                onChange={handleInputChange}
                name={input.name}
                minLength={input.min}
                maxLength={input.max}
                placeholder={input.placeholder}
              ></textarea>
              <br />
              <small className={count === 450 ? "count-red" : ""}>
                {count} / {input.max}
              </small>
            </>
          ) : (
            <>
              <label htmlFor={input.name}>
                {input.label} {input.required ? <span>*</span> : ""}
              </label>
              <input
                autoComplete="off"
                type={isInputNumber(input.type)}
                name={input.name}
                onChange={handleInputChange}
                required={input.required}
                maxLength={input.max}
                minLength={input.min}
                placeholder={input.placeholder}
              />
            </>
          )}
        </div>
      ))}
    </div>
  );
};
