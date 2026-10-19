import { useNavigate } from 'react-router-dom'

function Dashboard() {
  const navigate = useNavigate()

  const user = JSON.parse(
    localStorage.getItem('loggedInUser') || 'null'
  )

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser')
    navigate('/login')
  }

  if (!user) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-blue-700 text-white p-5 flex justify-between">
        <h1 className="text-xl font-bold">Dashboard</h1>

        <button
          onClick={handleLogout}
          className="bg-red-500 px-4 py-2 rounded-lg"
        >
          Logout
        </button>
      </nav>

      <div className="flex justify-center p-10">
        <div className="bg-white p-8 rounded-xl shadow-md text-center">
          <h2 className="text-3xl font-bold text-blue-700">
            Welcome, {user.name}!
          </h2>

          <p className="mt-4 text-gray-600">{user.email}</p>

          <p className="mt-3">Login successful!</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard