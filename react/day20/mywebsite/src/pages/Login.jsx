import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
  const [user, setUser] = useState({
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

    if (!user.email || !user.password) {
      alert('Please fill all fields')
      return
    }

    const savedUser = localStorage.getItem('user')

    if (!savedUser) {
      alert('Please register first')
      navigate('/register')
      return
    }

    const registeredUser = JSON.parse(savedUser)

    if (
      registeredUser.email === user.email &&
      registeredUser.password === user.password
    ) {
      localStorage.setItem(
        'loggedInUser',
        JSON.stringify({
          name: registeredUser.name,
          email: registeredUser.email,
        })
      )

      navigate('/dashboard')
    } else {
      alert('Invalid email or password')
    }
  }

  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-80"
      >
        <h1 className="text-2xl font-bold text-blue-700 text-center mb-6">
          Login
        </h1>

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

        <button className="w-full bg-blue-600 text-white p-3 rounded-lg">
          Login
        </button>

        <p className="text-sm text-center mt-4">
          New user? <Link to="/register" className="text-green-600">Register</Link>
        </p>
      </form>
    </div>
  )
}

export default Login