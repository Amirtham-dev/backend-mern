import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Register() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target

    setUser((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!user.name || !user.email || !user.password) {
      alert('Please fill all fields')
      return
    }

    const savedUser = localStorage.getItem('user')

    if (savedUser && JSON.parse(savedUser).email === user.email) {
      alert('Email already registered')
      return
    }

    localStorage.setItem('user', JSON.stringify(user))

    alert('Registration successful')
    navigate('/login')
  }

  return (
    <div className="min-h-screen bg-green-100 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-80"
      >
        <h1 className="text-2xl font-bold text-green-700 text-center mb-6">
          Register
        </h1>

        <input
          name="name"
          placeholder="Name"
          value={user.name}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg mb-4"
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          value={user.email}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg mb-4"
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          value={user.password}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg mb-4"
        />

        <button className="w-full bg-green-600 text-white p-3 rounded-lg">
          Register
        </button>

        <p className="text-sm text-center mt-4">
          Already registered? <Link to="/login" className="text-blue-600">Login</Link>
        </p>
      </form>
    </div>
  )
}

export default Register