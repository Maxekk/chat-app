import React from 'react'

function ProfileIcon({setprofileComp}) {
  const renderProfileComp = () => {
    setprofileComp(true);
  }

  return (
    <img src={require("../assets/ProfileIcon.png")} className='profileImage' onClick={renderProfileComp}></img>
  )
}

export default ProfileIcon;