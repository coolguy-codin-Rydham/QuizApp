import { useState } from "react";
import { data } from "../../assets/data";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import {Score} from "../../App"
const Question = () => {

    const {score,setScore} = useContext(Score)
  const [questionNum, setQuestioNum] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null)
  const [ques,setQues] = useState(data[questionNum]);
  const history = useNavigate()



  const options = [ques.option1, ques.option2, ques.option3, ques.option4]

  const checkAns = (e, ans, option) =>{
    setSelectedOption(option)
    if(ques.ans === ans){
      console.log(score)
      setScore(score+1)
    }
  }

  const next = () =>{
    if(questionNum===data.length-1){
      history(`/end?correct=${score}`)
      // setScore(0)
    }else{
      setQuestioNum(questionNum + 1);
      setQues(data[questionNum + 1]);
      setSelectedOption(null); 
    }
  }

  return (
    <div className="grid w-full h-[90vh] text-center place-items-center">
      <div className="p-10 bg-white border border-black shadow-md startbg rounded-3xl shadow-black">
        <h1 className="pb-5 font-sans text-2xl font-bold text-white">{questionNum+1}. {ques.question}</h1>
        <div className="flex flex-col flex-1 gap-4">
          {options.map((option, index)=>(
            <div
            key={index}
            onClick={(e) => checkAns(e,index+1, option)}
            className={`w-full h-full px-5 py-3 text-left text-white bg-pink-400 rounded-2xl cursor-pointer ${
              selectedOption === option && "bg-green-500"
            }`}
          >
            {option} {selectedOption === option && <span>✓</span>}
          </div>
          ))}
        </div>
        <button className="px-6 py-2 mt-4 text-xl font-semibold text-white border-2 border-white rounded-lg" onClick={next}>Next</button>
        <h5 className="pt-5 font-sans text-xl font-semibold text-white">Question {questionNum+1} of {data.length}</h5>
      </div>
    </div>
  );
};

export default Question;
