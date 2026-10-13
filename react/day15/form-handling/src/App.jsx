import { useState } from "react"
import Register from "./components/Register"
import Product from "./components/Product"
import Course from "./components/Course"
import ExpenseForm from "./components/ExpenseForm"
import StudentMarksForm from "./components/StudentMarksForm"

const App = () => {
  return (
    <>
    <Register/>
    <Product />
    <Course />
    <ExpenseForm />
    <StudentMarksForm />
    </>
  )
}

export default App
