import "./ChangePassword.css";

export const ChangePassword = () => {
  return (
    <form className="ch-pass-contain">
      <h1>Change your password</h1>
      <div className="input-pass">
        <input required type="password" placeholder="Enter your new password" />
        <button>Change password</button>
      </div>
    </form>
  );
};
