import {useState} from 'react'

const App = () => {

  const [data,setData]=useState([{name:"ami",age:20,course:"mern"},
    {name:"sri",age:20,course:"java"},
    {name:"shan",age:20,course:"medcode"}
  ])
  return (
    <>
    <div>
      {data.map((e,i)=>{
        <div key={i+1}></div>
        <h2>name:{e.name}</h2>
        <h2>name:{e.age}</h2>
        <h2>name:{e.course}</h2>
        


      })}
    </div>
    
    </>
  )
}

export default App
