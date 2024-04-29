import { DropdownProps } from "../../models/dropdown.model";
import "./Dropdown.css";
import userIcon from "../../assets/user-icon.png";
import { Link, useNavigate } from "react-router-dom";
export const Dropdown: React.FC<DropdownProps> = ({
  fullname,
  userImage,
  userRole,
}) => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/", {
      preventScrollReset: true,
    });
  };
  return (
    <div className="dropdown">
      <div className="hello">
        <img src={userImage || userIcon} alt="" />
        <span>Hello {fullname}</span>
      </div>

      <div className="dropdown-content">
        <Link to={`profile`}>
          <div>
            <i className="fa-solid fa-user"></i>
            <p>Profile</p>
          </div>
        </Link>
        {(userRole === "company" || userRole === "admin") && (
            <>
              <Link to={`/post-job`}>
                <div>
                  <i className="fa-solid fa-suitcase"></i>
                  <p className="post-p">Post Job</p>
                </div>
              </Link>
            </>
        )}

        {userRole === "admin" && (
          <Link to={`/create-post`}>
            <div>
              <i className="fa-regular fa-newspaper"></i>
              <p className="post-p">Create Post</p>
            </div>
          </Link>
        )}
        <div className="logout-contain" onClick={logout}>
          <div>
            <i className="fa-solid fa-right-from-bracket"></i>
            <p className="logout-p">Logout</p>
          </div>
        </div>
      </div>
    </div>
  );
};
