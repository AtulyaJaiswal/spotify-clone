import React from 'react';
import './login.css';
import {loginUrl} from './Spotify';

function Login() {
  return (
    <>
    <div className='login'>
    {/* Spotify Logo */}
    <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
    alt=""    />
    {/* Spotify Button */}
    <a href={loginUrl}>Login With Spotify</a >
    </div>
    </>
  )
}

export default Login;