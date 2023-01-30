import React from "react";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { v4 as uuidv4, v4 } from "uuid";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

function RegisterScreen({ setregisterSetter }) {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [sent, setsent] = useState(false);
  const [url, seturl] = useState("");

  const handleUsername = (e) => {
    const val = e.target.value;
    setusername(val);
  };

  const handleEmail = (e) => {
    const val = e.target.value;
    setemail(val);
  };

  const handlePassword = (e) => {
    const val = e.target.value;
    setpassword(val);
  };

  const login = () => {
    setregisterSetter(false);
  };

  const registerOnPress = (e) => {
    if (e.key === "Enter") {
      createUser();
    }
  };

  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setDoc(doc(db, "users", uuidv4()), {
          uidu: user.uid,
          username: username,
          profileULR: url,
        });
        console.log("User created");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    console.log(file);
    if (file == null) return;
    else {
      const storage = getStorage();
      const fileref = ref(storage, `/images/${username + "-" + uuidv4()}`);
      const upload = await uploadBytes(fileref, file);
      console.log("uploaded");

      await getDownloadURL(fileref).then((url) => {
        seturl(url);
      });
    }
  };

  return (
    <div className="MainContainer" onKeyPress={registerOnPress}>
      <div className="LoginContainer" onKeyPress={registerOnPress}>
        <p>Username</p>
        <input
          type="text"
          onChange={handleUsername}
          className="AccountInput"
          onKeyPress={registerOnPress}
        ></input>
        <p>Email</p>
        <input
          type="text"
          onChange={handleEmail}
          className="AccountInput"
          onKeyPress={registerOnPress}
        ></input>
        <p>Password</p>
        <input
          type="password"
          onChange={handlePassword}
          className="AccountInput"
          onKeyPress={registerOnPress}
        ></input>
        <input
          type="file"
          className="UploadProfilePicReg"
          onChange={handleUpload}
          multiple
          onKeyPress={registerOnPress}
        ></input>
        <button
          className="RegisterButton"
          onClick={createUser}
          onKeyPress={registerOnPress}
        >
          Register
        </button>
        <h1>
          <a onClick={login}>Sign in</a>
        </h1>
      </div>
    </div>
  );
}

export default RegisterScreen;
