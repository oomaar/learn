import React, { useState } from 'react';
import './App.css';
import Login from './components/Login';


function App() {
  // const [user, setUser] = useState(null);
  // Simply user the user from the store by store.user
  // const [store, dispatch] = useStateValue();
  // Distructure the store
  // const [{user}, dispatch] = useStateValue();

  return (
    <div className="app">
      <h1>This is my fancy app</h1>
      <h3>Back to square 1</h3>
      <Login />
    </div>
  );
}

export default App;
