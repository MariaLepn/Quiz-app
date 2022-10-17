import React from "react"

export default function Start(props) {
    
    return (
        <div className="container">
            <h1>Quizzical</h1>
            <h2>Music quiz</h2>
            <button className="start--button" onClick={props.handleClick} >Start quiz</button>
        </div>
    )
}