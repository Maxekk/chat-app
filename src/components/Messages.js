import React, { useEffect, useState } from 'react'
import { db } from '../firebase';
import ChatMessage from './ChatMessage';
import ImageMessage from './ImageMessage';
import { useRef } from 'react';

function Messages({dummy}) {
  const [messages,setmessages] = useState([]);
  const [usernames,setusernames] = useState([]);

  useEffect(() => {
    db.collection("messages").orderBy("createdAt").limit(50).onSnapshot(snapshot => {
      setmessages(snapshot.docs.map(doc => doc.data()))
    })
    
    db.collection("users").limit(50).onSnapshot(snapshot => {
      setusernames(snapshot.docs.map(doc => doc.data()));
    })
    console.log(usernames)
  }, [])

  return (
    <div className='MessagesContainer'>
      {messages.map(({content, createdAt, uid, isImage}) => {
          if(isImage) {
            return(
              <ImageMessage content={content} uid={uid} />
            )
          }
          else {
            return(
              <ChatMessage content={content} uid={uid} createdAt={createdAt} />
            )
          }
      })}
      <span ref={dummy}></span>
    </div>
  )
}

export default Messages