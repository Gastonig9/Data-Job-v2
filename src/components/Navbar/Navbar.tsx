import "./Navbar.css";
import logo from "../../assets/logo-job.png";
import { Link } from "react-router-dom";

interface NavbarProps {
  setOpenModal: (isOpen: boolean) => void;
}
export const Navbar: React.FC<NavbarProps> = ({ setOpenModal }) => {
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
        <h6 onClick={openModalLogin}>Login</h6>
        <Link to={`/post-job`}>
          <h2>
            <i className="fa-solid fa-briefcase"></i> Post a Job{" "}
          </h2>
        </Link>
      </div>
    </nav>
  );
};
