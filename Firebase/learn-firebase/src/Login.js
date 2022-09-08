import React from 'react';

const Login = (props) => {
    const { email, setEmail, password, setPassword, handleLogin, handleSignup, hasAccount, setHasAccount, emailErr, passErr } = props;
    return (
        <div className="login">
            <div className="loginContainer">
                <label>Email</label>
                <input
                    type="text"
                    autoFocus
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <p className="errorMsg">{emailErr}</p>

                <label>Password</label>
                <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <p className="errorMsg">{passErr}</p>

                <div className="btnContainer">
                    {hasAccount ? (
                        <>
                            <button onClick={handleLogin}>Sign In</button>
                            <p>Doont have an account ? <span onClick={() => setHasAccount(!hasAccount)}>Sign Up</span> </p>
                        </>
                    ) : (
                            <>
                                <button onClick={handleSignup}>Sign Up</button>
                                <p>Have an account ? <span onClick={() => setHasAccount(!hasAccount)}>Sign In</span> </p>
                            </>
                        )}
                </div>
            </div>
        </div>
    );
}

export default Login;
