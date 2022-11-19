import React from 'react'
import { auth } from '../firebase';
import {signOut } from "firebase/auth";
import ProfileIcon from './ProfileIcon';

function Navbar({setisLogged, setprofileComp}) {

    const logOut = () => {
        signOut(auth).then(() => {
            console.log("User signed out")
            setisLogged(false);
          }).catch((error) => {
            console.log("An error occured: " + error)
          });
    }

    const renderProfileComp = () => {
        setprofileComp(true);
    }
    
    return (
        <div className='NavabarContainer'>
            <div className='Logo'><h3>CHAT-ROOM</h3></div>
            <div className='ButtonFormatter'>
                <button className='LogoutButton' onClick={logOut}>Log Out</button>
                <button className='ProfileButton' onClick={renderProfileComp}><ProfileIcon /></button>
            </div>
        </div>
    )
}

export default Navbar