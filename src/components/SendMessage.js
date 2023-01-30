import React, { useState, useEffect } from "react";
import { auth, db } from "../firebase";
import { doc, setDoc, Timestamp } from "firebase/firestore";
import { v4 as uuidv4, v4 } from "uuid";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { FaFileUpload } from "react-icons/fa";
import { MdSend } from "react-icons/md";

function SendMessage({ dummy }) {
  const [message, setmessage] = useState("");

  const handleInputChange = (e) => {
    setmessage(e.target.value);
  };

  const sendMessage = async () => {
    await setDoc(doc(db, "messages", uuidv4()), {
      content: message,
      createdAt: Timestamp.now(),
      uid: auth.currentUser.uid,
      isImage: false,
    });
    setmessage("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  const sendMessageOnPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  const handleUpload = async (e) => {
    const file = e.target.files[0];

    if (file == null) return;
    else {
      const storage = getStorage();
      const fileref = ref(
        storage,
        `/images/${auth.currentUser.uid + "-" + uuidv4()}`
      );
      const upload = await uploadBytes(fileref, file);

      await getDownloadURL(fileref).then((url) => {
        setDoc(doc(db, "messages", uuidv4()), {
          content: url,
          createdAt: Timestamp.now(),
          uid: auth.currentUser.uid,
          isImage: true,
        });
        setmessage("");
        dummy.current.scrollIntoView({ behavior: "smooth" });
      });
    }
  };

  return (
    <div className="SendMessageContainer">
      <input
        type="text"
        className="SendMessageInput"
        onChange={handleInputChange}
        value={message}
        onKeyPress={sendMessageOnPress}
      ></input>

      <label class="label">
        <input
          type="file"
          className="Upload"
          onChange={handleUpload}
          multiple
        />
        <span>
          <FaFileUpload className="uploadImage" />
        </span>
      </label>

      <button className="SendMessageBtn" onClick={sendMessage}>
        <MdSend className="sendImage" />
      </button>
    </div>
  );
}

export default SendMessage;
