import React from 'react'
import NonPrimitiveData from './components/nonPrimitiveData.jsx'
import PrimitiveData from './components/primitiveData.jsx'

const App = () => {
  return (
    <div >

      <div className="bg-blue-100 p-5 rounded-lg  justify-items-center">
        <NonPrimitiveData />
      </div>

      <div className="bg-green-100 p-5 rounded-lg justify-items-center">
        <PrimitiveData />
      </div>

    </div>
  )
}

export default App