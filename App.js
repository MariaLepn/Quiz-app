import React from "react"
import Questions from "./Questions"
import Start from "./Start"




export default function App() {
    //handling my quiz page load on the button click
    const [questionsPage, setQuestionsPage] = React.useState(false)
    const [start, setStart] = React.useState(true)
    function handleClick() {
        setQuestionsPage(prevState => !prevState)
        setStart(prevState => !prevState)
    }
    
    //fetch data from API
    const [datas, setDatas] = React.useState([]);
    
    React.useEffect(() => {
         fetch("https://opentdb.com/api.php?amount=5&category=12&type=multiple")
            .then((res) => res.json())
            .then(data => setDatas(data.results.map(data => {
                return {
                    question: data.question,
                    answer: data.correct_answer,
                    options: data.incorrect_answers
             } }))) 
        }, [])

   const questions = datas.map(item => {
        return (  
           <Questions className="container"
                key={item.id}
                question={item.question
                    .replace(/&#039;/g, "'")
                    .replace(/&quot;/g, '"')
                    .replace(/&amp;/g, "&")
                    .replace(/&rsquo;/g, "''")
                    .replace(/&ouml;/g, "ö")}
                answer={item.answer}
                incorrect={item.options}
                id={item.id}
                
           /> )
       })

    return (
       <div className="container">
            {questions} 
            <button className="check-button">Check answers</button> 
       </div>
            
            
       
    )      
}
//<Start handleClick={handleClick}/>}