import { useState } from 'react'

import React from 'react'

const Easy = () => {

  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
    setCount(count + 1)
    setCount(count + 1)
  }

  // Task 1
  const arr = [10, 45, 20, 45, 30]

  let largest = -Infinity
  let secondLargest = -Infinity

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest
      largest = arr[i]
    } else if (arr[i] > secondLargest && arr[i] < largest) {
      secondLargest = arr[i]
    }
  }

  // Task 2
  const arr2 = [1, 2, 2, 3, 4, 4, 5]
  let removeDuplicate = []

  for (let i = 0; i < arr2.length; i++) {
    if (!removeDuplicate.includes(arr2[i])) {
      removeDuplicate.push(arr2[i])
    }
  }

  // Task 3
  const charString = 'banana'
  let charCount = {}

  for (let i = 0; i < charString.length; i++) {
    let char = charString[i]

    if (charCount[char]) {
      charCount[char] = charCount[char] + 1
    } else {
      charCount[char] = 1
    }
  }

  // Task 4
  const employees = [
    { id: 1, name: 'Arun', salary: 25000 },
    { id: 2, name: 'Priya', salary: 35000 },
    { id: 3, name: 'Kumar', salary: 40000 },
    { id: 4, name: 'Bala', salary: 30000 },
    { id: 5, name: 'Divya', salary: 45000 }
  ]

  const filteredEmployees = employees.filter(
    (e) => e.salary > 30000
  )

  let totalSalary = 0

  for (let i = 0; i < filteredEmployees.length; i++) {
    totalSalary = totalSalary + filteredEmployees[i].salary
  }

  // Task 5
  const sentence = 'I love JavaScript'
  const words = sentence.split(' ')
  let reversed = ''

  for (let i = words.length - 1; i >= 0; i--) {
    reversed = reversed + words[i] + ' '
  }

  reversed = reversed.trim()

  return (
    <div className="p-6 space-y-4">

      <h1 className="text-xl font-bold">Second Largest Number</h1>
      <p>{secondLargest}</p>

      <hr />

      <h1 className="text-xl font-bold">Remove Duplicates</h1>
      <p>{removeDuplicate.join(', ')}</p>

      <hr />

      <h1 className="text-xl font-bold">Character Frequency</h1>
      <p>{JSON.stringify(charCount)}</p>

      <hr />

      <h1 className="text-xl font-bold">Employee Salary Filter</h1>

      {filteredEmployees.map((emp) => (
        <p key={emp.id}>
          {emp.name} - ₹{emp.salary}
        </p>
      ))}

      <h3 className="font-bold">
        Total Salary: ₹{totalSalary}
      </h3>

      <hr />

      <h1 className="text-xl font-bold">Reverse Words</h1>
      <p>Original: {sentence}</p>
      <p>Reversed: {reversed}</p>

      <hr />
      <h1>Count: {count}</h1>
      <button className='bg-blue-400 rounded font-bold' onClick={handleClick}>Increment</button>



    </div>
  )
}

export default Easy
