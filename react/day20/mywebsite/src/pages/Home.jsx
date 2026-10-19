import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center">
      <div className="bg-white p-10 rounded-xl shadow-lg text-center">
        <h1 className="text-3xl font-bold text-blue-700">
          Welcome Home
        </h1>

        <p className="mt-3 text-gray-600">
          Login or create your account
        </p>

        <div className="flex gap-4 mt-6">
          <Link
            to="/login"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="bg-green-600 text-white px-6 py-2 rounded-lg"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home