/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import "./ChangeData.css";
import { inputTextProfile } from "../../../assets/constants";
import { ChangeUserData } from "../../../models/user.model";
import { UserService } from "../../../services/UserService";
import { Loader } from "../../../components/Loader/Loader";
import { toast } from "react-toastify";

interface ChangeDataProps {
  uid: string | undefined;
}

export const ChangeData: React.FC<ChangeDataProps> = ({ uid }) => {
  const [updateUserInfo, setUpdateUserInfo] = useState<ChangeUserData>({
    fullname: null,
    description: null,
    email: null,
    location: null,
    phone: null,
  });
  const [updateSuccess, setUpdateSuccess] = useState<{
    [key: string]: boolean;
  }>({
    fullname: false,
    description: false,
    email: false,
    location: false,
    phone: false,
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUpdateUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      [name as keyof ChangeUserData]: value,
    }));
  };

  const [loadingChange, setloadingChange] = useState(false);

  const handleChangeDataSubmit = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    field: keyof ChangeUserData
  ) => {
    event.preventDefault();
    try {
      await new UserService().updateUserInfo(uid, updateUserInfo);
      let count = 0;
      const dataInterval = setInterval(() => {
        count++;
        if (count === 1) setloadingChange(true);
        if (count === 3) {
          setloadingChange(false);
          setUpdateSuccess((prevUpdateSuccess) => ({
            ...prevUpdateSuccess,
            [field]: true,
          }));
        }
        if (count === 5) {
          clearInterval(dataInterval);
        }
      }, 500);
    } catch (error: any) {
      toast.error(error);
    }
  };

  return (
    <div className="change-data-contain">
      <h2>Change your basic information</h2>
      <form>
        <div className="ch-inputs">
          {inputTextProfile.map((input) => (
            <div className="input" key={input.id}>
              <label htmlFor={input.id}>{input.label}</label>
              <input
                type={input.type}
                id={input.id}
                name={input.name}
                placeholder={input.placeholder}
                value={updateUserInfo[input.name as keyof ChangeUserData] || ""}
                onChange={handleInputChange}
                required={input.required}
                min={input.min}
                max={input.max}
                autoComplete="off"
              />

              {loadingChange ? (
                <Loader isForPage={false} isForButton={true} />
              ) : updateSuccess[input.name as keyof ChangeUserData] ? (
                <div className="icon-success">
                  <i className="fa-solid fa-square-check"></i>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={(e) =>
                    handleChangeDataSubmit(
                      e,
                      input.name as keyof ChangeUserData
                    )
                  }
                >
                  Change {input.label}
                </button>
              )}
            </div>
          ))}
        </div>
      </form>
    </div>
  );
};
