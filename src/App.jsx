import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Start from "./components/StartEndPage/Start"
import Question from "./components/QuestionTemp/Question"
import End from "./components/StartEndPage/End"
import NotFound404 from "./components/Errors/NotFound404"
import { createContext, useState } from "react"

export const Score = createContext()
function App() {
  const [score, setScore] = useState(0);


  return (
    <Score.Provider value = {{score, setScore}}>
    <Router>
      <Routes>
        <Route path="/" exact Component={Start}/>
        <Route path="/question/:questionNumber" Component={Question}/>
        <Route path="/end" Component={End}/>
        <Route path="*" Component={NotFound404}/>
      </Routes>
    </Router>
    </Score.Provider>
  )
}

export default App
