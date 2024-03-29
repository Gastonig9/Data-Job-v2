import "./Login.css"

export const Login = () => {
  return (
    <div className="login-contain">
        <div className="other">
            <h1>Sign Up</h1>
            <p>Click on Sign Up button to create a new account.</p>
            <button>Sign Up</button>
        </div>
        <form action="">
            <h1>Login To Your Account</h1>
            <input type="text" name="email" placeholder="Email" />
            <input type="text" name="password" placeholder="Password" />
            <button>Sign In</button>
        </form>
    </div>
  )
}
