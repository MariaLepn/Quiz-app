import React from "react"

export default function Questions(props) {
  console.log(props)
    
    //const incorrectAnswers = props.incorrect.map(elem => <li key={elem}>{elem}</li>)
    return (
        <div className="quizz-container">
           <p className="question">{props.question}</p>
           <ul className="quizz--list">
                <li>{props.answer}</li>
                <li>{props.incorrect[0]}</li>
                <li>{props.incorrect[1]}</li>
                <li>{props.incorrect[2]}</li>
           </ul>
           <div className="line"></div>
        </div>
    )
}