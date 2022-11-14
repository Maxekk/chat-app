import React from 'react'
import { auth } from '../firebase'

function ChatMessage({content, uid, createdAt}) {
  return (
    <div>
        <div key={uid} className={`msg ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
            {content}
        </div>
    </div>
  )
}

export default ChatMessage