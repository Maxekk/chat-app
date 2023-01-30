import React, { useEffect, useState } from "react";
import { db, auth } from "../firebase";
import ChatMessage from "./ChatMessage";
import ImageMessage from "./ImageMessage";
import { useRef } from "react";

function Messages({ dummy }) {
  const [messages, setmessages] = useState([]);
  const [users, setusers] = useState([]);
  useEffect(() => {
    db.collection("messages")
      .orderBy("createdAt")
      .limit(50)
      .onSnapshot((snapshot) => {
        setmessages(snapshot.docs.map((doc) => doc.data()));
      });

    db.collection("users")
      .limit(10)
      .onSnapshot((snapshot) => {
        setusers(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  return (
    <div className="MessagesContainer">
      {messages.map(({ content, createdAt, uid, isImage }) => {
        if (isImage) {
          return (
            <ImageMessage
              content={content}
              uid={uid}
              username={users.map(({ uidu, username, profileULR }) => {
                if (uid == uidu) {
                  return username;
                }
              })}
            />
          );
        } else {
          return (
            <ChatMessage
              content={content}
              uid={uid}
              createdAt={createdAt}
              users={users}
              username={users.map(({ uidu, username }) => {
                if (uid == uidu) {
                  return username;
                }
              })}
            />
          );
        }
      })}
      <span ref={dummy}></span>
    </div>
  );
}

export default Messages;
