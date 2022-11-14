import React, { useEffect, useState } from 'react'
import { db } from '../firebase';
import ChatMessage from './ChatMessage';

function Messages() {
  const [messages,setmessages] = useState([]);

  useEffect(() => {
    db.collection("messages").orderBy("createdAt").limit(50).onSnapshot(snapshot => {
      setmessages(snapshot.docs.map(doc => doc.data()))
    })
  }, [])

  return (
    <div className='MessagesContainer'>
      {messages.map(({content, createdAt, uid}) => {
        return(
          <ChatMessage content={content} uid={uid} createdAt={createdAt}/>
        )
      })}
    </div>
  )
}

export default Messages