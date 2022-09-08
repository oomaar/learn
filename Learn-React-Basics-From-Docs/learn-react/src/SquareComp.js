import React from 'react'

export default function SquareComp(props) {
    return (
        <div>
            <button className="square" onClick={props.onClick}>
            {props.value}
            </button>
        </div>
    )
}
