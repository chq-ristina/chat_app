import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">C's Chat</span>
      <div className="user">
        <img src='https://alpha.aeon.co/images/acd6897d-9849-4188-92c6-79dabcbcd518/header_essay-final-gettyimages-685469924.jpg' alt=''/>
        <span>John</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar