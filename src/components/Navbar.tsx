// import React from 'react';
import { Link } from 'react-router-dom';
import { Pocket, User, Car as Cards } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-red-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Pocket className="h-8 w-8" />
            <span className="text-xl font-bold">Virtual PokéDex</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <Link to="/collection" className="flex items-center space-x-1 hover:text-gray-200">
              <Cards className="h-5 w-5" />
              <span>Collection</span>
            </Link>
            <Link to="/profile" className="flex items-center space-x-1 hover:text-gray-200">
              <User className="h-5 w-5" />
              <span>Profile</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;