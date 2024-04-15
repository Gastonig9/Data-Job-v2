/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import "./ChangePassword.css";
import { UserService } from "../../../services/UserService";
import { toast } from "react-toastify";

interface ChangePasswordProps {
  email: string | undefined;
}

export const ChangePassword: React.FC<ChangePasswordProps> = ({ email }) => {

  const handleSendRecoverEmail = async () => {
    try {
      const sendMail = await new UserService().sendEmailRecoverPass(email)
      toast.success(sendMail.message)
    } catch (error:any) {
      toast.error(error)
    }
  }
  return (
    <form className="ch-pass-contain">
      <div onClick={handleSendRecoverEmail}>
        <h1>Change your password</h1>
      </div>
    </form>
  );
};
