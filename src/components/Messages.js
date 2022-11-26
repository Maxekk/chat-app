import React, { useEffect, useState } from 'react'
import { db, auth } from '../firebase';
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

    db.collection("users").limit(10).onSnapshot(snapshot => {
      setusernames(snapshot.docs.map(doc => doc.data()));
    })
  }, [])

 const getProfilePic = (id) => {
    db.collection("users").where("uidu", "==", id)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(doc.data().profileULR)
        });
        
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
  }
  
  return (
    <div className='MessagesContainer'>
      {messages.map(({content, createdAt, uid, isImage}) => {
          if(isImage) {
            return(
              <ImageMessage content={content} uid={uid} username={
                usernames.map(({uidu, username}) => {
                  if(uid == uidu){
                    return(username);
                  }
                })}
                />
            )
          }
          else {
            return(
              <ChatMessage content={content} uid={uid} createdAt={createdAt} username={
                usernames.map(({uidu, username}) => {
                  if(uid == uidu){
                    return(username);
                  }
                })
              } />
            )
          }
      })}	
      <span ref={dummy}></span>
    </div>
  )
}

export default Messages;