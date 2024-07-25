import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem"

function QuestionList() {
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/questions')
      .then((response) => response.json())
      .then((items) => setQuestions(items))
  }, [])

  function passDeleted (deletedQuestion) {
    console.log(deletedQuestion)
    setQuestions(deletedQuestion)
  }

  const renderQuestions = questions.map(function(question2) {
    return <QuestionItem key={question2.id} id={question2.id} prompt={question2.prompt} answers={question2.answers} passDeleted={passDeleted}/>
  })
  
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {renderQuestions}
      </ul>
    </section>
  );
}

export default QuestionList;
