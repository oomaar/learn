import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { incrment, decrment } from "./actions/index";

const App = () => {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Learn Redux: Counter: {counter}</h1>
      <button onClick={() => dispatch(incrment(5))} >+</button>
      <button onClick={() => dispatch(decrment())} >-</button>
      <button onClick={() => !isLogged} >Revel</button>
      {isLogged && <h3>Valuble information should't see if not logged in</h3>}
    </div>
  );
}

export default App;
