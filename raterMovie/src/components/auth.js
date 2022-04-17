import React, { useState, useEffect } from 'react'
import { API } from "../api-service";
//import { TokenContext } from '../index';
import { useCookies } from 'react-cookie'

function Auth(){

    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ isLoginView, setIsLoginView ] = useState(true);

    const [ token, setToken ] = useCookies(['mr-token']);

    useEffect( () => {
        console.log(token);
        if(token['mr-token']) window.location.href = '/movies';
      }, [token])

    const loginClicked = () => {
        API.loginUser({username, password})
        .then( resp => console.log('mr-token', resp.token))
        .catch( error => console.log(error))
    }

    const registerClicked = () => {
        API.registerUser({username, password})
        .then( () => loginClicked())
        .catch( error => console.log(error))
    }

    const isDisabled = username.length === 0 || password.length === 0;

    return (
        <div className="App">
            <header className="App-header">
                {isLoginView ? <hr>Login</hr> : <hr>Register</hr>}
            </header>
            <div className="login-container">
                <label htmlfor="username">Username</label><br />
                <input id="username" type="text" placeholder="username" value={username} onChange={ evt => setUsername(evt.target.value)} /><br></br>
                <label htmlfor="password">Password</label><br />
                <input id="password" type="password" placeholder="password"  value={password} onChange={ evt => setPassword(evt.target.value)} /><br></br>

                {isLoginView ? 
                    <button onClick={loginClicked}>Login</button> : 
                    <button onClick={registerClicked}>Register</button>
                }

                {isLoginView ? 
                    <p onClick={() => setIsLoginView(false)} disabled={isDisabled}>You don't have an account? Register here!</p> : 
                    <p onClick={() => setIsLoginView(true)} disabled={isDisabled}>You already have an account. Login here</p>
                }
            </div>   
        </div>
    )
}

export default Auth;