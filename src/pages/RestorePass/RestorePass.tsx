/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import "./RestorePass.css";
import { UserService } from "../../services/UserService";
import { useParams } from "react-router-dom";
import { ChangePassword } from "../../models/user.model";
import { toast } from "react-toastify";

const RestorePass = () => {
  const [newPassword, setNewPassword] = useState<ChangePassword>({
    newPassword: ""
  });
  const { token } = useParams();

  const onChangeNewPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword({
      newPassword: event.target.value
    });
  };

  const handleRestorePassword = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const changePassword = await new UserService().changeUserPassword(token, newPassword);
      toast.success(changePassword.message)
    } catch (error:any) {
      toast.error(error.message);
    }
  };

  return (
    <div className="restore-pass-contain">
      <form onSubmit={handleRestorePassword} className="restore">
        <h1>Restore your password</h1>
        <input type="password" value={newPassword.newPassword} onChange={onChangeNewPassword} required/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RestorePass;
