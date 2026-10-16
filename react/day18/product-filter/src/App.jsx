import { useEffect, useState } from 'react'


const App = () => {

const[data,setData]=useState("")
const[search,setSearch]=useState("")
const[city,setCity]=useState("")

useEffect(()=>{
  fetch("https://dummyjson.com/users")
},[])

  return (
    <>
    <div>
     <div>
      <input className='bg-white p-2' type="text" />
     </div>

    </div>
    
    </>
  )
}

export default App


