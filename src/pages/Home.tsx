import React from 'react';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Welcome to Pokemon App</h1>
        <p className="text-lg text-gray-600 mb-8">
          Explore the world of Pokemon with infinite scrolling
        </p>
        <Link
          to="/pokemons"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
        >
          View Pokemon Collection
        </Link>
      </div>
    </div>
  );
}; 