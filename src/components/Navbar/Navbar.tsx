import "./Navbar.css";
import logo from "../../assets/logo-job.png";
import { Link, useNavigate } from "react-router-dom";
import { useJwt } from "react-jwt";
import { User } from "../../models/user.model";
import { Dropdown } from "../Dropdown/Dropdown";
import { useEffect } from "react";
import { toast } from "react-toastify";

interface NavbarProps {
  setOpenModal: (isOpen: boolean) => void;
}
export const Navbar: React.FC<NavbarProps> = ({ setOpenModal }) => {
  const token = localStorage.getItem("token");
  const { decodedToken, isExpired } = useJwt<User>(token || "");
  console.log(decodedToken)
  const navigate = useNavigate();

  useEffect(() => {
    if (decodedToken && isExpired) {
      localStorage.removeItem("token");
      toast.info("The session has expired. Please log in again");
      navigate("/");
    }
  }, [isExpired, decodedToken, navigate]);
  
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
          <Dropdown fullname={decodedToken?.fullname} userRole={decodedToken?.role} userImage={decodedToken?.userImage} />
        ) : (
          <>
            <h6 onClick={openModalLogin}>Login</h6>
          </>
        )}
      </div>
    </nav>
  );
};
