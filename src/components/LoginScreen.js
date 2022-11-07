import React from 'react'
import { useState } from 'react'

function LoginScreen() {
    const [email,setemail] = useState("");
    const [password,setpassword] = useState("");
    const [sent,setsent] = useState(false);
    
    const handeInput = (e) => {

    }

    return (
        <div className='MainContainer'>
            <div className='LoginContainer'>
                <form>
                <p>Email</p>
                <input type="text"></input>
                <p>Password</p>
                <input type="text"></input>
                <br></br>
                <button className='LoginButton'>Login</button>
                <br></br>
                <h1><a href='X'>Dont have an account?</a></h1>
                </form>
            </div>
        </div>
    )
}

export default LoginScreen;