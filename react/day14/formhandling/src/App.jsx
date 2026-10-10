import { useState } from 'react'
 

const App = () => {

  const[datas,setDatas]=useState([""])

  const handleClick=()=>{
      
    setDatas((p)=>[...p,900])
  }
  return (
    <>
    <div>
      {datas.map((e,i)=>(
        <h1 key={i}>{e}</h1>
      ))}
      </div> 
      <div>
        <input type="text" />
      </div>
      <button onClick={handleClick}>click</button>
    
    </>
  )
}

export default App
