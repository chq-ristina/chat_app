import React from 'react';

import AddAvatar from '../img/addAvatar.png'

const Register = () => {
  return (
    <div className='form-container'>
        <div className='form-wrapper'>
            <span className="logo">C's Chat</span>
            <span className="title">Register</span>
            <form>
                <input type="text" placeholder='display name'></input>
                <input type="email" placeholder='email'></input>
                <input type="password" placeholder='password'></input>
                <input style={{display: "none"}} type="file" id='file'></input>
                <label htmlFor='file'>
                    <img src={AddAvatar} alt=''/>
                    <span>Add an avatar</span>
                </label>
                <button>Sign Up</button>
            </form>
            <p>Have an account? Login</p>
        </div>
    </div>
  )
}

export default Register