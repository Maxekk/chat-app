import React, { useState, useEffect } from 'react'
import { auth, db } from '../firebase';
import { doc, setDoc, Timestamp  } from "firebase/firestore"; 
import { v4 as uuidv4 } from 'uuid'

function SendMessage() {
    const [message,setmessage] = useState("");
    const handleInputChange = (e) => {
        setmessage(e.target.value);
    }

    const sendMessage = async () => {
        await setDoc(doc(db, "messages", uuidv4()), {
            content: message,
            createdAt: Timestamp.now(),
            uid: auth.currentUser.uid,
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