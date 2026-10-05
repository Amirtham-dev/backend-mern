
import { useState } from 'react'
 
const App = () => {

const[name,setName]=useState("arun")
const[count,setCount]=useState(0)
const [show, setShow] = useState(false)
const [studentname, setStudentName] = useState("")
const [likes, setLikes] = useState(0)

const handleClick=()=>{

   setName("kumar")
}
const handleIncrease=()=>{

   setCount(count+1)
}
const handleDecrease=()=>{

   setCount(count-1)
}
const handleReset=()=>{

   setCount(0)
}

const handleToggle = () => {
    setShow(!show);
  }
  const handleChange = (e) => {
    setStudentName(e.target.value);
  }
   const handleLike = () => {
    setLikes(likes + 1)
  }
  return (
   <>
   <div className=' bg-green-300 p-2 flex flex-col items-center justify-center '>
    <h1 className='text-2xl font-bold '>Name:{name}</h1>
    <button onClick={handleClick} className='bg-blue-400 p-2 rounded-2xl'> click me</button>
   </div>
    <div className=' bg-blue-300 p-2 flex flex-col items-center justify-center '>
      <h1 className='text-2xl font-bold '>COUNT: {count}</h1>
      <div className="flex gap-2">
      <button  onClick={handleIncrease} className='bg-green-400 p-2 rounded-2xl'>Increase</button>
      <button onClick={handleDecrease} className='bg-yellow-400 p-2 rounded-2xl'>Decrease</button>
      <button onClick={handleReset} className='bg-red-400 p-2 rounded-2xl'>Reset</button>
      </div>
    </div>
    <div className=' bg-purple-300 p-2 flex flex-col items-center justify-center '>
      <button onClick={handleToggle} className='bg-purple-400 p-2 rounded-2xl'>
        click
      </button>
      {show && <h2 className="text-2xl font-semibold">Welcome to React</h2>}
    </div>
    <div className=' bg-yellow-300 p-2 flex flex-col items-center justify-center '>
       <input
        type="text"
        value={studentname}
        onChange={handleChange}
        placeholder="Enter student name"
       />
       <h2 className="text-2xl font-semibold">Name: {studentname}</h2>
    </div>
    <div className=' bg-orange-300 p-2 flex flex-col items-center justify-center '>

      <h2 className="text-2xl font-semibold">Likes: {likes}</h2>

      <button
        onClick={handleLike}
        className="bg-pink-400 p-2 rounded-2xl"
      >
        Like
      </button>
    </div>
   </>
  ) 
}

export default App
