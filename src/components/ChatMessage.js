import React from 'react'
import { auth } from '../firebase'

function ChatMessage({content, uid, createdAt, username}) {
  return (
    <div>
        <div key={uid} className={`msg ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
            <div className='nigga'>{content}</div>
        </div>
    </div>
  )
}


export default ChatMessage;