import React from 'react'
import { auth } from '../firebase'

function ChatMessage({content, uid, createdAt, username}) {
  return (
    <div className='MessContainer'>
        <div key={uid} className={`msg ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
        <div className={`username ${uid === auth.currentUser.uid ? 'usernamesent' : 'usernamereceived'}`}>{username}:</div>
            <div className='nigga'>{content}</div>
        </div>
    </div>
  )
}


export default ChatMessage;