import React from 'react'
import { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase'
import { db } from '../firebase';
import { doc, setDoc } from "firebase/firestore"; 
import { v4 as uuidv4, v4 } from 'uuid'

function RegisterScreen({setregisterSetter}) {
    const [username,setusername] = useState("");
    const [email,setemail] = useState("");
    const [password,setpassword] = useState("");
    const [sent,setsent] = useState(false);
    
    const handleUsername = e => {
        const val = e.target.value;
        setusername(val);
    }

    const handleEmail = e => {
        const val = e.target.value;
        setemail(val);
    }
    
    const handlePassword = e => {
        const val = e.target.value;
        setpassword(val);
    }

    const login = () => {
        setregisterSetter(false);
    }

    const createUser = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            setDoc(doc(db, "users", uuidv4()), {
                uid: user.uid,
                username: username,
            });
            console.log("User created")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }

    return (
        <div className='MainContainer'>
            <div className='LoginContainer'>
                    <p>Username</p>
                    <input type="text" onChange={handleUsername}></input>
                    <p>Email</p>
                    <input type="text" onChange={handleEmail}></input>
                    <p>Password</p>
                    <input type="text" onChange={handlePassword}></input>
                    <br></br>
                    <button className='RegisterButton' onClick={createUser}>Register</button>
                    <h1><a onClick={login}>Sign in</a></h1>
            </div>
        </div>
    )
}


export default RegisterScreen;