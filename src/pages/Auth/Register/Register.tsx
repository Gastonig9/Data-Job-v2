import { useState } from "react";
import { AuthRegister } from "../../../models/auth.model";
import "./Register.css";
import { AuthService } from "../../../services/AuthService";
import { ErrorResponse } from "../../../models/error.response";

interface LoginProps {
  setChangeModal: (isRegister: string) => void;
}

export const Register: React.FC<LoginProps> = ({ setChangeModal }) => {
  //STATES
  const [responseRegister, setresponseRegister] = useState<ErrorResponse>({
    error: "",
    message: [],
    statusCode: 0,
  });
  const [dataRegister, setDataRegister] = useState<AuthRegister>({
    fullname: "",
    email: "",
    password: "",
  });

  //WINDOW LOGIN / REGISTER
  const handleIsLogin = () => {
    setChangeModal("login");
  };

  //EVENTS

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setDataRegister((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegisterSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const registerUser = await new AuthService().registerUser(dataRegister);
    if (registerUser.statusCode === 200) {
      window.location.reload();
    } else {
      setresponseRegister(registerUser);
    }
  };

  return (
    <div className="register-contain">
      <div className="other">
        <h1>Sign In</h1>
        <p>Click on Sign in button to login to the site.</p>
        <button onClick={handleIsLogin}>Sign In</button>
      </div>
      <form onSubmit={handleRegisterSubmit} className="form-register" action="">
        <h1>Create Account</h1>
        <input
          type="text"
          name="fullname"
          placeholder="Full Name"
          value={dataRegister.fullname}
          onChange={handleInputChange}
          autoComplete="off"
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={dataRegister.email}
          onChange={handleInputChange}
          autoComplete="off"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={dataRegister.password}
          onChange={handleInputChange}
          autoComplete="off"
        />
        <button type="submit">Sign Up</button>
        {responseRegister.statusCode === 400 && (
          <div className="messages-error">
            <small>
              An error occurred {responseRegister.statusCode}:{" "}
              {responseRegister.error}
            </small>
            <small style={{ color: "red" }}>Possible causes</small>
            {responseRegister.message.map((m) => (
              <div className="messages">
                <small style={{ color: "red" }}>• {m}</small>
              </div>
            ))}
          </div>
        )}
        {responseRegister.statusCode === 500 && (
          <div className="messages-error">
            <small style={{ color: "red" }}>{responseRegister.error}</small>
          </div>
        )}
      </form>
    </div>
  );
};
