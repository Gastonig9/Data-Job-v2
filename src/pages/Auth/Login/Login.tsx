/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import "./Login.css";
import { AuthLogin } from "../../../models/auth.model";
import { AuthService } from "../../../services/AuthService";
import { ErrorResponse } from "../../../models/error.response";
interface LoginProps {
  setChangeModal: (isRegister: string) => void;
}

export const Login: React.FC<LoginProps> = ({ setChangeModal }) => {
  //STATES
  const [responseLogin, setresponseLogin] = useState<ErrorResponse>({
    error: "",
    message: [],
    statusCode: 0,
  });
  const [dataLogin, setDataLogin] = useState<AuthLogin>({
    email: "",
    password: "",
  });

  //WINDOW LOGIN / REGISTER
  const handleIsRegister = () => {
    setChangeModal("register");
  };

  //EVENTS
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setDataLogin((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLoginSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const authService = new AuthService();
    const loginUser = await authService.loginUser(dataLogin);
   
    if (loginUser.statusCode === 200) {
      localStorage.setItem('token', loginUser.accessToken)
      window.location.reload();
    } else {
      setresponseLogin(loginUser);
    }
  };
  return (
    <div className="login-contain">
      <div className="other">
        <h1>Sign Up</h1>
        <p>Click on Sign Up button to create a new account.</p>
        <button onClick={handleIsRegister}>Sign Up</button>
      </div>
      <form onSubmit={handleLoginSubmit}>
        <h1>Login To Your Account</h1>
        <input
          type="text"
          name="email"
          placeholder="Email"
          autoComplete="off"
          value={dataLogin.email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          autoComplete="off"
          value={dataLogin.password}
          onChange={handleInputChange}
        />
        <button>Sign In</button>
        {responseLogin.statusCode === 400 && (
          <div className="messages-error">
            <small>
              An error occurred {responseLogin.statusCode}:{" "}
              {responseLogin.error}
            </small>
            <small style={{ color: "red" }}>Possible causes</small>
            {responseLogin.message.map((m) => (
              <div className="messages">
                <small style={{ color: "red" }}>• {m}</small>
              </div>
            ))}
          </div>
        )}
        {responseLogin.statusCode === 500 && (
          <div className="messages-error">
            <small style={{ color: "red" }}>
              An error occurred, please check your credentials
            </small>
          </div>
        )}
      </form>
    </div>
  );
};
