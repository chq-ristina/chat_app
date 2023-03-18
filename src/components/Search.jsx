import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='Find a user...'/>
      </div>
      <div className="userChat">
        <img src='https://alpha.aeon.co/images/acd6897d-9849-4188-92c6-79dabcbcd518/header_essay-final-gettyimages-685469924.jpg' alt=''/>
        <div className="userChatInfo">
          <span>
            Jane
          </span>
        </div>
      </div>
    </div>
  )
}

export default Search