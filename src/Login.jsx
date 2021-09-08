import React from "react";
import "./Login.css";

function Login() {
  return (

    <div className="login">
      <div className="login__container">
        <h1>Sign In</h1>
    {/* formulario de login */}
        <form>
          <h5>E-mail</h5>
          <input type="email"></input>
        </form>
      </div>
    </div>
  );
}

export default Login;
