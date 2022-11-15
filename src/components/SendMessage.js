import React, { useState, useEffect } from 'react'
import { auth, db } from '../firebase';
import { doc, setDoc, Timestamp  } from "firebase/firestore"; 
import { v4 as uuidv4, v4 } from 'uuid'
import Logo from '../components/Logo'
import { getStorage, ref , uploadBytesResumable} from "firebase/storage";
import storage from '../firebase';

function SendMessage() {
    const [message,setmessage] = useState("");
    const [file,setfile] = useState(null);

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

    const handleUpload = (e) => {
      setfile(e.target.files[0]);
      if(file == null) return
      else {
        const storage = getStorage();
        const fileref = ref(storage, `/images/${auth.currentUser.uid + "-" + uuidv4()}`);
        const upload = uploadBytesResumable(fileref, file);
        console.log("uploaded")
        setfile(null);
      }
    }

  return (
    <div className='SendMessageContainer'>
        <input 
        type='text' 
        className='SendMessageInput' 
        onChange={handleInputChange}
        value={message}></input>
        <label class="label">
          <input type="file" className='Upload' onChange={handleUpload} files={file}/>
            <span>
              <Logo />
            </span>
        </label>
        <button className='SendMessageBtn' onClick={sendMessage}>Send</button>
    </div>
  )
}

export default SendMessage;