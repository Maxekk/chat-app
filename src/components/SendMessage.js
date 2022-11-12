import React, { useState } from 'react'
import { database } from '../firebase';
import { doc, setDoc } from "firebase/firestore"; 
import { v4 as uuidv4 } from 'uuid'

function SendMessage() {
    const [message,setmessage] = useState("");
    const handleInputChange = (e) => {
        setmessage(e.target.value);
    }

    const sendMessage = async () => {
        await setDoc(doc(database, "messages", uuidv4()), {
            content: message,
            createdAt: "",
            uid: uuidv4()
          });
        setmessage("");
    }

  return (
    <div className='SendMessageContainer'>
        <input 
        type='text' 
        className='SendMessageInput' 
        onChange={handleInputChange}
        value={message}></input>
        <button className='SendMessageBtn' onClick={sendMessage}>Send</button>
    </div>
  )
}

export default SendMessage;