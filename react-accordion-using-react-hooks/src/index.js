/* Tutorial at https://youtu.be/MAD2HnUFjgg */

import React from "react";
import ReactDOM from "react-dom";
import Accordion from "./components/Accordion";
import data from "./data.json";

import "./styles.css";

function App() {
  return (
    <div className="App">
      {data.map(item => (
        <Accordion
          key={item.id}
          title={item.header}
          body={item.body}
        />
      ))}
      {/* <Accordion
        title="How do I track my order?"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <Accordion
        title="Can I purchase items again?"
        body="
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </br>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </br>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        "
      /> */}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
