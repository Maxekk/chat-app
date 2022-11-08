import React from 'react'
import { useState } from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';

function LoginScreen({setisLogged, isLogged}) {
    const [email,setemail] = useState("");
    const [password,setpassword] = useState("");
    
    const handleEmail = e => {
        setemail(e.target.value);
    }

    const handlePassword = e => {
        setpassword(e.target.value);
    }

    const login = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("User logged in: " + user)
            setisLogged(true);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(error)
        });
    }

    return (
        <div className='MainContainer'>
            <div className='LoginContainer'>
                <p>Email</p>
                <input type="text" onChange={handleEmail}></input>
                <p>Password</p>
                <input type="text" onChange={handlePassword}></input>
                <br></br>
                <button className='LoginButton' onClick={login}>Login</button>
                <br></br>
                <h1><a href='X'>Dont have an account?</a></h1>
            </div>
        </div>
    )
}

export default LoginScreen;