import { useState } from "react";
import { Link } from "react-router-dom";

const Start = () => {
  const [correct, setCorrect] = useState(0)

  

  return (
    <div className="grid w-full h-screen text-center place-items-center">
      <div className="p-10 bg-white border border-black shadow-md startbg rounded-3xl shadow-black ">
        <h1 className="pb-10 text-4xl font-bold leading-relaxed tracking-wide text-white">
          To Start the game press the button <br /> below &darr;
        </h1>
        <Link className="px-4 py-2 text-xl font-bold transition-colors bg-white border-2 border-black hover:bg-pink-500 hover:text-white hover:border-white rounded-xl" to={`/question/correct=${correct}setCorrect=${setCorrect}`}>Start</Link>
      </div>
    </div>
  );
};

export default Start;
