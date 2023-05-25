import React from 'react';
import Button from './Button';

const Introduction = ({username = "Guest", message}) => {
  // handle signup button
  const signup = () => {
    alert('Signup button clicked');
  }

  // handle login button
  const login = () => {
    alert('Login button clicked');
  }

  return (
    <>
        <h2>Introduction</h2>
        <p>My name is {username}</p>
        <p>{message}</p>
        <div>
            <Button bgcolor="red" handleEvent={signup} >Signup</Button>
            <Button bgcolor="green" handleEvent={login}>Login</Button>
        </div>
    </>
  )
}

export default Introduction;
