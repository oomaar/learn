import React, { useState, useRef } from "react";
import "./Accordion.css";
import data from "../data.json";
// import Chevron from "./Chevron";

function Accordion({ title, body }) {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion__icon");

  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(setActive === "active" ? "0px" : `${content.current.scrollHeight}px`);
    setRotateState(setActive === "active" ? "accordion__icon" : "accordion__icon rotate");
  }

  return (
    <div className="accordion__section">

      <div className="netflix__box1">
        <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
          <p className="accordion__title">{title}</p>
          {/* <Chevron className={`${setRotate}`} width={10} fill={"#777"} /> */}
          <img src="/add-slim.png" alt="add" className={`netflix__Icon addSlim ${setRotate}`} />
        </button>

        <div ref={content} style={{ maxHeight: `${setHeight}` }} className="accordion__content">
          <div className="accordion__text" dangerouslySetInnerHTML={{ __html: body }} />
        </div>
      </div>

    </div>
  );
}

export default Accordion;
