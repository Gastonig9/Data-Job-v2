import "./Navbar.css";
import logo from "../../assets/logo-job.png";
import { Link, useNavigate } from "react-router-dom";
import { useJwt } from "react-jwt";
import { User } from "../../models/user.model";
import { Dropdown } from "../Dropdown/Dropdown";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface NavbarProps {
  setOpenModal: (isOpen: boolean) => void;
}
export const Navbar: React.FC<NavbarProps> = ({ setOpenModal }) => {
  const token = localStorage.getItem("token");
  const { decodedToken, isExpired } = useJwt<User>(token || "");
  const [openNavbar, setopenNavbar] = useState(false);
  const [fixed, setfixed] = useState<boolean>(false)
  const navigate = useNavigate();

  useEffect(() => {
    if (decodedToken && isExpired) {
      localStorage.removeItem("token");
      toast.info("The session has expired. Please log in again");
      navigate("/");
    }
  }, [isExpired, decodedToken, navigate]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY || document.documentElement.scrollTop;
      if(scrollPosition > 20)  {
        setfixed(true)
      } else {
        setfixed(false)
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [fixed]);
  

  const openModalLogin = () => {
    setOpenModal(true);
  };

  const openResponsiveNavbar = () => {
    setopenNavbar(!openNavbar);
  };
  return (
    <>
      <nav className={fixed ? `navbar-contain nav-fixed animate__animated animate__fadeInDown` : `navbar-contain`}>
        <div className="nav-brand">
          <img src={logo} alt="Job logo" />
        </div>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/blog">
            <li>Blog</li>
          </Link>
        </ul>
        <div className="nav-login">
          {token ? (
            <>
              <Dropdown
                fullname={decodedToken?.fullname}
                userRole={decodedToken?.role}
                userImage={decodedToken?.userImage}
              />
              <div className="post-job-button">
                <i className="fa-solid fa-plus"></i>
                <Link to={`/post-job`}>
                  <button>Post a Job</button>
                </Link>
              </div>
            </>
          ) : (
            <>
              <div className="login-title">
                <i className="fa-solid fa-user"></i>
                <h6 onClick={openModalLogin}>Login</h6>
              </div>
              <div className="post-job-button">
                <i className="fa-solid fa-plus"></i>
                <Link to={`/post-job`}>
                  <button>Post a Job</button>
                </Link>
              </div>
            </>
          )}
        </div>
      </nav>

      <nav className="navbar-responsive-contain">
        <div className="open-nav">
          <div className="img-nav-responsive">
            <img src={logo} alt="DataJob Logo" />
          </div>

          <div className="bars">
            <i className="fa-solid fa-bars" onClick={openResponsiveNavbar}></i>
          </div>
        </div>
        {openNavbar && (
          <ul className="navbar-responsive-info">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/jobs">
              <li>Jobs</li>
            </Link>
            {token ? (
              <div className="profile-link">
                <Link to={`/profile`}>
                  <img src={decodedToken?.userImage} alt="" />
                </Link>
              </div>
            ) : (
              <div className="login-responsive">
                <li onClick={openModalLogin}>Login</li>
              </div>
            )}
          </ul>
        )}
      </nav>
    </>
  );
};
