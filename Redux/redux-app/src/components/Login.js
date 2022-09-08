import React from 'react';

function Login() {

    const loginToApp = () => {
        // Do some Login stuff
    }

    return (
        <div>
            <h1>I am the login Component</h1>
            <button onClick={loginToApp}>Login</button>
        </div>
    )
}

export default Login;
