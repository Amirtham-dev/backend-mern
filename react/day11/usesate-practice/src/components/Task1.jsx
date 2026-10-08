import { useState } from "react";

const Task1 = () => {
  const [employee, setEmployee] = useState({
    name: "Arun",
    salary: 25000
  });

  const handleclick = () => {
    setEmployee({
      ...employee,
      salary: employee.salary + 5000
    });
  };

  return (
    <div className="min-h-screen bg-blue-100 flex flex-col justify-center items-center gap-5">

       <h1 className="text-2xl font-bold text-center  text-black mb-5">
          EMPLOYEE DETAILS
        </h1>
      <div className="bg-white p-6 rounded-2xl shadow-lg w-50">

        

        <div className="flex flex-col gap-4 w-40 h-50 justify-center items-center">

          <h2 className="text-xl text-gray-700 font-bold">
            Name: {employee.name}
          </h2>

          <h2 className="text-xl text-gray-700 font-bold">
            Salary: {employee.salary}
          </h2>

          <button
            onClick={handleclick}
            className="bg-green-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-green-700"
          >
            INCREASE SALARY
          </button>

        </div>

      </div>

    </div>
  );
};

export default Task1;