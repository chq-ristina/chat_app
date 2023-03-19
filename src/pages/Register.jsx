import React from 'react';

import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

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
                    <AddPhotoAlternateIcon style={{fontSize: 40}}/>
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