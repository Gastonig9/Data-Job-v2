import "./Navbar.css";
import logo from "../../assets/logo-job.png";
import { Link } from "react-router-dom";
import { useJwt } from "react-jwt";
import { User } from "../../models/user.model";
import { Dropdown } from "../Dropdown/Dropdown";

interface NavbarProps {
  setOpenModal: (isOpen: boolean) => void;
}
export const Navbar: React.FC<NavbarProps> = ({ setOpenModal }) => {
  const token = localStorage.getItem("token");
  const { decodedToken } = useJwt<User>(token || "");
  const openModalLogin = () => {
    setOpenModal(true);
  };
  return (
    <nav className="navbar-contain">
      <div className="nav-brand">
        <img src={logo} alt="Job logo" />
      </div>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/jobs">
          <li>Jobs</li>
        </Link>
        <Link to="/jobs">
          <li>Contact</li>
        </Link>
        <Link to="/jobs">
          <li>Other</li>
        </Link>
      </ul>
      <div className="nav-login">
        {token ? (
          <Dropdown fullname={decodedToken?.fullname} />
        ) : (
          <>
            <h6 onClick={openModalLogin}>Login</h6>
            <Link to={`/post-job`}>
              <h2>
                <i className="fa-solid fa-briefcase"></i> Post a Job{" "}
              </h2>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};
