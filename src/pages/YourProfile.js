import React, { useEffect, useState } from 'react'
import { db, auth } from '../firebase';

function YourProfile({setprofileComp}) {
  const [usernames,setusernames] = useState([]);

  useEffect(() => {
    db.collection("users").limit(10).onSnapshot(snapshot => {
      setusernames(snapshot.docs.map(doc => doc.data()));
    })
  }, [])

  const renderChat = () => {
    setprofileComp(false);
  }

  return (
    <div className='MainContainer'>
      {console.log(usernames)}
      {console.log(auth.currentUser)}
      <div className='LoginContainer'>
        <center><p>Change Profile Picture</p></center>
        <div className='ProfilePictureContainer'>
          <img className='CurrentUserProfilePicture' src={
              usernames.map(({uidu, profileULR}) => {
              if(auth.currentUser.uid == uidu){
                return(profileULR);
              }
            })
          }></img>
        </div>
        <div className='ChangeProfilePicFormContainer'>
          <input type="file" className='UploadProfilePic'></input>
        </div>
        <div className='ReturnContainer'>
          <center><h3 onClick={renderChat} className='Return'>Return to chat</h3></center>
        </div>
      </div>
    </div>
  )
}

export default YourProfile;