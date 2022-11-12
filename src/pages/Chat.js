import React from 'react'
import Navbar from '../components/Navbar';
import Messages from '../components/Messages';
import SendMessage from '../components/SendMessage';

function Chat({ isLogged,setisLogged }) {
  return (
    <div className='MainContainer'>
      <div className='ChatContainer'>
        <Navbar setisLogged={setisLogged}/>
        <Messages />
        <SendMessage />
      </div>
    </div>
  )
}

export default Chat;