import "./Navbar.css";
import logo from "../../assets/logo-job.png";
import { Link } from "react-router-dom";
export const Navbar = () => {
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
        <h6>Login</h6>
        <h2><i className="fa-solid fa-briefcase"></i> Post a Job </h2>
      </div>
    </nav>
  );
};
