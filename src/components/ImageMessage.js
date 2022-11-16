import React from 'react'
import { auth } from '../firebase';

function ImageMessage({content, uid}) {
  return (
    <div className={`ImageMessage ${uid === auth.currentUser.uid ? 'sentImg' : 'receivedImg'}`}>
        <img src={content} width="250px" height="150px"></img>
    </div>
  )
}

export default ImageMessage