import "./Auth.css";
import { useState } from "react";
import { Register, Login } from ".";
interface AuthProps {
  setCloseModal: (isOpen: boolean) => void;
}

const Auth: React.FC<AuthProps> = ({ setCloseModal }) => {
  const [selectTypeOfAuth, setselectTypeOfAuth] = useState<string>("login");
  const closeModalAuth = () => {
    setCloseModal(false);
  };
  
  return (
    <div className="auth-contain animate__animated animate__fadeInDown">
      <div onClick={closeModalAuth} className="cancel-icon">
        <i className="fa-solid fa-xmark"></i>
      </div>
      {selectTypeOfAuth === "login" ? <Login setChangeModal={setselectTypeOfAuth} /> : <Register setChangeModal={setselectTypeOfAuth}/>}
      
    </div>
  );
};

export default Auth;
