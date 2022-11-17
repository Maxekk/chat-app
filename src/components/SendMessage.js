import React, { useState, useEffect } from 'react'
import { auth, db } from '../firebase';
import { doc, setDoc, Timestamp  } from "firebase/firestore"; 
import { v4 as uuidv4, v4 } from 'uuid'
import Logo from '../components/Logo'
import { getStorage, ref , uploadBytes, getDownloadURL} from "firebase/storage";
import storage from '../firebase';

function SendMessage({dummy}) {
    const [message,setmessage] = useState("");
    const handleInputChange = (e) => {
        setmessage(e.target.value);
    }

    const sendMessage = async () => {
        await setDoc(doc(db, "messages", uuidv4()), {
            content: message,
            createdAt: Timestamp.now(),
            uid: auth.currentUser.uid,
            isImage: false,
          });
        setmessage("");
        dummy.current.scrollIntoView({ behavior: 'smooth' });
    }

    const handleUpload = async (e) => {
      const file = e.target.files[0];
      console.log(file)
      if(file == null) return
      else {
        const storage = getStorage();
        const fileref = ref(storage, `/images/${auth.currentUser.uid + "-" + uuidv4()}`);
        const upload = await uploadBytes(fileref, file);
        console.log("uploaded")
      
        await getDownloadURL(fileref)
        .then(url => {
            setDoc(doc(db, "messages", uuidv4()), {
            content: url,
            createdAt: Timestamp.now(),
            uid: auth.currentUser.uid,
            isImage: true,
          });
        setmessage("");
        dummy.current.scrollIntoView({ behavior: 'smooth' });
        })
      }
    }

  return (
    <div className='SendMessageContainer'>
        <input
        type='text' 
        className='SendMessageInput' 
        onChange={handleInputChange}
        value={message}>
        </input>
        <label class="label">
        <input 
        type="file" 
        className='Upload' 
        onChange={handleUpload} 
        multiple 
        />
        <span>
            <Logo />
        </span>
        </label>
        <button className='SendMessageBtn' onClick={sendMessage}>Send</button>
    </div>
  )
}

export default SendMessage;