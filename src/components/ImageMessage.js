import React from 'react'
import { auth } from '../firebase';

function ImageMessage({content, uid, username, profileULR}) {
  return (
    <div className={`ImageMessage ${uid === auth.currentUser.uid ? 'sentImg' : 'receivedImg'}`}>
       <div className={`username ${uid === auth.currentUser.uid ? 'usernamesent' : 'usernamereceived'}`}>{username}</div>
        <img src={content} width="250px" height="150px" className='image'></img>
    </div>
  )
}

export default ImageMessage