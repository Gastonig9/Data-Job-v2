import "./Register.css";

interface LoginProps {
  setChangeModal: (isRegister: string) => void;
}

export const Register: React.FC<LoginProps> = ({ setChangeModal }) => {
  const handleIsLogin = () => {
    setChangeModal("login");
  };

  return (
    <div className="register-contain">
      <div className="other">
        <h1>Sign In</h1>
        <p>Click on Sign in button to login to the site.</p>
        <button onClick={handleIsLogin}>Sign In</button>
      </div>
      <form className="form-register" action="">
        <h1>Create Account</h1>
        <input type="text" name="fullName" placeholder="Full Name" />
        <input type="text" name="email" placeholder="Email" />
        <input type="text" name="password" placeholder="Password" />
        <button>Sign Up</button>
      </form>
    </div>
  );
};
