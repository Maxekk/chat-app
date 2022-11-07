import React from 'react'
import { useState } from 'react'

function RegisterScreen() {
    const [email,setemail] = useState("");
    const [password,setpassword] = useState("");
    const [sent,setsent] = useState(false);
    
    const handeInput = (e) => {

    }

    return (
        <div className='MainContainer'>
            <div className='LoginContainer'>
                <form>
                    <p>Username</p>
                    <input type="text"></input>
                    <p>Email</p>
                    <input type="text"></input>
                    <p>Password</p>
                    <input type="text"></input>
                    <br></br>
                    <button className='LoginButton'>Register</button>
                </form>
            </div>
        </div>
    )
}


export default RegisterScreen;