import React from 'react'
import Navbar from '../components/Navbar';
import Messages from '../components/Messages';
import SendMessage from '../components/SendMessage';
import { useRef } from 'react';

function Chat({ isLogged,setisLogged }) {
  const dummy = useRef();
  return (
    <div className='MainContainer'>
      <div className='ChatContainer'>
        <Navbar setisLogged={setisLogged}/>
        <Messages dummy={dummy}/>
        <SendMessage dummy={dummy}/>
      </div>
    </div>
  )
}

export default Chat;