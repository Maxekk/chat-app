import React, { useEffect, useState } from 'react'
import { db, auth } from '../firebase';

function ChatMessage({content, uid, username, users}) {
  return (
    <div className='MessContainer'>
        <div key={uid} className={`msg ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
        <div className='MsgContent'>
            <div className={`username ${uid === auth.currentUser.uid ? 'usernamesent' : 'usernamereceived'}`}>{username}</div>
            <div className='nigga'>{content}</div>
        </div>
        {users.map(({uidu, profileULR}) => {
            if(uidu == uid){
              return(<img src={profileULR} className='MsgProfilePic'></img>)
            }
          })
        }
        </div>
    </div>
  )
}


export default ChatMessage;