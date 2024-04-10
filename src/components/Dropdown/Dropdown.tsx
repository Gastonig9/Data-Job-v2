import { DropdownProps } from "../../models/dropdown.model";
import "./Dropdown.css";
import userIcon from "../../assets/user-icon.png";
import { Link } from "react-router-dom";
export const Dropdown: React.FC<DropdownProps> = ({
  fullname,
  userImage,
  userRole,
}) => {
  const noAdmin = () => {
    alert("Only administrators or companies can post jobs");
  };

  const logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <div className="dropdown">
      <div className="hello">
        <img src={userImage || userIcon} alt="" />
        <span>Hello {fullname}</span>
      </div>

      <div className="dropdown-content">
        <Link to={`profile`}>
          <p>Profile</p>
        </Link>
        {userRole !== "user" ? (
          <Link to={`/post-job`}>
            <p className="post-p">Post Job</p>
          </Link>
        ) : (
          <p onClick={noAdmin} className="disabled-p">
            Post Job
          </p>
        )}
        <p onClick={logout}>Logout</p>
      </div>
    </div>
  );
};
