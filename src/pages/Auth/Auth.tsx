import { Login } from "./Login/Login";
import "./Auth.css";

interface AuthProps {
  setCloseModal: (isOpen: boolean) => void;
}

const Auth: React.FC<AuthProps> = ({ setCloseModal }) => {
    const closeModalAuth = ()=> {
        setCloseModal(false)
    }
  return (
    <div className="auth-contain animate__animated animate__fadeInDown">
      <div onClick={closeModalAuth} className="cancel-icon">
        <i className="fa-solid fa-xmark"></i>
      </div>
      <Login />
    </div>
  );
};

export default Auth;
