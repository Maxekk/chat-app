import React from "react";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function LoginScreen({ setisLogged, isLogged, setregisterSetter }) {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleEmail = (e) => {
    setemail(e.target.value);
  };

  const handlePassword = (e) => {
    setpassword(e.target.value);
  };

  const register = () => {
    setregisterSetter(true);
  };

  const login = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User logged in");
        setisLogged(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
      });
  };

  const loginOnPress = (e) => {
    if (e.key === "Enter") {
      login();
    }
  };

  return (
    <div className="MainContainer" onKeyPress={loginOnPress}>
      <div className="LoginContainer">
        <p>Email</p>
        <input
          type="text"
          onChange={handleEmail}
          className="AccountInput"
        ></input>
        <p>Password</p>
        <input
          type="password"
          onChange={handlePassword}
          className="AccountInput"
        ></input>
        <br></br>
        <button className="LoginButton" onClick={login}>
          Login
        </button>
        <br></br>
        <h1>
          <a onClick={register}>Dont have an account?</a>
        </h1>
      </div>
    </div>
  );
}

export default LoginScreen;
