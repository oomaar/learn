import React, { useState } from 'react';
import faqsData from "../../faqs.json";
import "./Acc.css";

const Acc = () => {
    const [toggle, setToggle] = useState(false);
    const [show, setShow] = useState(false);
    const toggleShow = () => {
        setToggle(toggle => !toggle);
        setShow(show => !show);
    };

    return (
        <div className="type2">
            <h1 className="type2__title">FA!QSSS</h1>
            <div className="type2__container">
                {faqsData.map(item => (
                    <div className="type2__item" key={item.id} >
                        <div className="type2__question" onClick={toggleShow}>
                            {item.header}
                            <img src={`${!toggle ? '/images/add.png' : '/images/close-slim.png'}`} alt="alt text" className="type2__icon"/>
                        </div>
                        <p className={`${!show ? 'type2__answer': 'open' }`}>{item.body}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Acc
