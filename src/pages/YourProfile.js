import React from 'react'

function YourProfile({setprofileComp}) {
  const renderChat = () => {
    setprofileComp(false);
  }

  return (
    <div className='MainContainer'>
      <div className='LoginContainer'>
        <h3 onClick={renderChat}>Return to chat</h3>
      </div>
    </div>
    
  )
}

export default YourProfile