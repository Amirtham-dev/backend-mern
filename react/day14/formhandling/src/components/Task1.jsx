

const Task1 = () => {

    const[student,setStudent]=useState([])
    const[name,setName]=useState("")

    const handleclick=()=>{

        
    }

  return (
    <>
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
      <h1 className="text-2xl font-bold text-center text-blue-600 mb-5">
        Student Name List
      </h1>
    <input type="text" value={name} placeholder="enter your name"/>
    <buttton onClick={handleclick} className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
      >add</buttton>
    </div>
    </>
  )
}

export default Task1
