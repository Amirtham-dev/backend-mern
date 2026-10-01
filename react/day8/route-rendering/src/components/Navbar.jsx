import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex flex-col gap-3 bg-gray-800 px-4 py-4 text-white shadow-md sm:flex-row sm:items-center sm:justify-between sm:px-7">
      <Link className="text-xl font-bold tracking-wide" to="/">WELCOME</Link>
      <div className="flex flex-wrap items-center gap-1">
        <Link className="rounded-md px-3 py-2 transition hover:bg-white/10 hover:text-violet-300" to="/">Home</Link>
        <Link className="rounded-md px-3 py-2 transition hover:bg-white/10 hover:text-violet-300" to="/about">About</Link>
        <Link className="rounded-md px-3 py-2 transition hover:bg-white/10 hover:text-violet-300" to="/contact">Contact</Link>
        <Link className="rounded-md px-3 py-2 transition hover:bg-white/10 hover:text-violet-300" to="/service">Service</Link>
        <Link className="rounded-md px-3 py-2 transition hover:bg-white/10 hover:text-violet-300" to="/login">Login</Link>
        <Link className="rounded-md px-3 py-2 transition hover:bg-white/10 hover:text-violet-300" to="/register">Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;
