import React from 'react'
import Navbar from './Navbar';

function Chat({ isLogged,setisLogged }) {
  return (
    <div className='MainContainer'>
      <div className='ChatContainer'>
        <Navbar setisLogged={setisLogged}/>
      </div>
    </div>
  )
}

export default Chat;