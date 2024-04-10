import { useState } from "react";
import "./ChangeRole.css";
import { UserService } from "../../../services/UserService";
import { ChangeUserRole } from "../../../models/user.model";
import { toast } from "react-toastify";

interface ChangeDataProps {
  uid: string | undefined;
}

export const ChangeRole: React.FC<ChangeDataProps> = ({ uid }) => {
  const [selectedRole, setSelectedRole] = useState<ChangeUserRole>({
    role: "user",
  });

  const handleChangeRole = (role: string) => {
    setSelectedRole({ role });
  };

  const handleChangeRoleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    try {
      await new UserService().updateUserRole(uid, selectedRole);
      toast.success(
        `Great! You have changed your account to the role of ${selectedRole.role}`,
        {
          position: "top-center",
        }
      );
    } catch (error) {
      console.error("Error updating user info:", error);
    }
  };

  return (
    <div className="change-role-container">
      <>
        <h1>Why are you here?</h1>
        <form onSubmit={handleChangeRoleSubmit} className="role-buttons">
          <button
            className={selectedRole.role === "user" ? "active" : ""}
            onClick={() => handleChangeRole("user")}
          >
            I am looking for work
          </button>
          <button
            className={selectedRole.role === "company" ? "active" : ""}
            onClick={() => handleChangeRole("company")}
          >
            I want to publish
          </button>
        </form>
      </>
    </div>
  );
};
