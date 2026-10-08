import { useState } from "react";

const Task2 = () => {
  const [array, setArray] = useState(["HTML", "CSS", "JavaScript"]);

  const handleclick = () => {
    setArray([...array, "React"]);
  };

  const updateArray = () => {
    setArray(array.map((e) => (e === "CSS" ? "Advanced CSS" : e)));
  };

  return (
    <>
     
      <div className="min-h-screen bg-blue-100 flex flex-col justify-center items-center gap-5">
        <div className="flex flex-col justify-center items-center gap-5 mb-5">
        <h1 className="text-3xl font-bold mb-6 text-center text-black gap-5">
          COURSE LIST
        </h1>
        </div>

        
        <div className="bg-white w-80 p-6 rounded-2xl shadow-lg justify-center items-center flex flex-col gap-5">

        
          <div className="flex flex-col gap-3 mb-5">
            {array.map((e, i) => (
              <h1
                key={i + 1}
                className="text-xl font-bold text-gray-700"
              >
                {e}
              </h1>
            ))}
          </div>

          
          <div className="flex flex-gap-5 gap-3 justify-center items-center">

            <button
              onClick={handleclick}
              className="bg-green-500 text-white py-2 rounded-lg font-semibold hover:bg-green-600"
            >
              ADD REACT
            </button>

            <button
              onClick={updateArray}
              className="bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600"
            >
              UPDATE CSS
            </button>

          </div>

        </div>

      </div>
    </>
  );
};

export default Task2;