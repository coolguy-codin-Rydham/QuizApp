

const Button = () => {
  return (
    <button className="relative px-8 py-2 overflow-hidden border-2 border-red-800 cursor-pointer rounded-2xl group">
  <span className="relative z-10 overflow-hidden text-xl font-bold text-pink-700 duration-500 group-hover:text-white">Start</span>
  <span className="absolute top-0 left-0 w-full h-full overflow-hidden duration-500 bg-red-800 group-hover:-translate-x-full"></span>
  <span className="absolute top-0 left-0 w-full h-full overflow-hidden duration-500 bg-red-800 group-hover:translate-x-full"></span>
  
    <span className="absolute top-0 left-0 w-full h-full overflow-hidden duration-500 delay-300 bg-white group-hover:-translate-y-full"></span>
  <span className="absolute top-0 left-0 w-full h-full overflow-hidden duration-500 delay-300 bg-white group-hover:translate-y-full"></span>
</button>
  )
}

export default Button
