/* eslint-disable default-case */
import React, { useState, useEffect } from "react";
import './App.css';
import fire from "./fire";
import Login from "./Login";
import Hero from "./Hero";

function App() {

  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailErr, setEmailErr] = useState("");
  const [passErr, setPassErr] = useState("");

  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  }

  const clearErrs = () => {
    setEmailErr("");
    setPassErr("");
  }

  const handleLogin = () => {
    clearErrs();
    fire.auth().signInWithEmailAndPassword(email, password).catch(err => {
      switch (err.code) {
        case "auth/invalid-email":
        case "auth/user-disabled":
        case "auth/user-not-found":
          setEmailErr(err.message);
          break;

        case "auth/wrong-password":
          setPassErr(err.message);
          break;
      }
    });
  }

  const handleSignup = () => {
    clearErrs();
    fire.auth().createUserWithEmailAndPassword(email, password).catch(err => {
      switch (err.code) {
        case "auth/email-already-in-use":
        case "auth/invalid-email":
          setEmailErr(err.message);
          break;

        case "auth/weak-password":
          setPassErr(err.message);
          break;
      }
    });
  }

  const handleLogout = () => {
    fire.auth.signOut();
  }

  const authListner = () => {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser(" ");
      }
    });
  }

  useEffect(() => {
    authListner();
  }, []);

  return (
    <div className="App">
      {/* <Login
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleLogin={handleLogin}
        handleSignup={handleSignup}
        hasAccount={hasAccount}
        setHasAccount={setHasAccount}
        emailErr={emailErr}
        passErr={passErr}
      /> */}
      {setUser ? <Hero handleLogout={handleLogout} /> : <Login
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleLogin={handleLogin}
        handleSignup={handleSignup}
        hasAccount={hasAccount}
        setHasAccount={setHasAccount}
        emailErr={emailErr}
        passErr={passErr}
      />}
    </div>
  );
}

export default App;

//<Hero handleLogout={handleLogout} />