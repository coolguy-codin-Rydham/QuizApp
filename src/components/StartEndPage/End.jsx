import { Link } from "react-router-dom"
import { useContext } from "react";
import { Score } from "../../App";
const End = () => {
  const {score, setScore} = useContext(Score)
  console.log(score)

  return (
    <div className="grid w-full h-screen text-center place-items-center">
      <div className="p-10 bg-white border border-black shadow-md startbg rounded-3xl shadow-black ">
        <h1 className="pb-10 text-4xl font-bold leading-relaxed tracking-wide text-white">
          Here is your score {score}
        </h1>
        <h1 className="pb-10 text-4xl font-bold leading-relaxed tracking-wide text-white">
          To Start the game again press the button <br /> 
        </h1>

        <Link onClick={()=>setScore(0)} className="px-4 py-2 text-xl font-bold transition-colors bg-white border-2 border-black hover:bg-pink-500 hover:text-white hover:border-white rounded-xl" to="/">Go</Link>
      </div>
    </div>
  )
}

export default End
