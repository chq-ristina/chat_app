import React from 'react'

const Login = () => {
  return (
    <div className='form-container'>
        <div className='form-wrapper'>
            <span className="logo">C's Chat</span>
            <span className="title">Login</span>
            <form>
                <input type="email" placeholder='email'></input>
                <input type="password" placeholder='password'></input>
                <button>Login</button>
            </form>
            <p>Don't have an account? Sign up</p>
        </div>
    </div>
  )
}

export default Login