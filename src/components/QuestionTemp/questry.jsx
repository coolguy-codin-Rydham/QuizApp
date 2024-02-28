import questions from "./ques";

const questry = () => {
  return (
    <div>
      {questions.map((question) => (
        <div key={question.question}>
          <h2>{question.question}</h2>
          <p>
            Category: {question.category}, Difficulty: {question.difficulty}
          </p>
          <ul>
            <li>Correct Answer: {question.correct_answer}</li>
            <li>Incorrect Answers: {question.incorrect_answers.join(', ')}</li>
          </ul>
        </div>
      ))}
    </div>
  )
}

export default questry
