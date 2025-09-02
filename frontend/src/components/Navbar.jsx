import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-yellow-600">
          Sribudaya Resort
        </Link>

        {/* Menu */}
        <div className="space-x-6">
          <Link to="/" className="text-gray-700 hover:text-yellow-600">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-yellow-600">About</Link>
          <Link to="/facility" className="text-gray-700 hover:text-yellow-600">Facility</Link>
          <Link to="/contact" className="text-gray-700 hover:text-yellow-600">Contact</Link>
          <Link to="/booking" className="bg-yellow-500 text-black px-3 py-1 rounded-lg font-semibold hover:bg-yellow-400">
            Booking
          </Link>
        </div>
      </div>
    </nav>
  );
}
