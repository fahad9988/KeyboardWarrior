import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="max-w-md mx-auto my-10">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-5">Keyboard Warrior</h2>
        <div className="flex flex-col gap-2">
          <Link
            to="/info"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            New Game
          </Link>
          <Link
            to="/instructions"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Instructions
          </Link>
          <Link
            to="/about"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            About Us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
