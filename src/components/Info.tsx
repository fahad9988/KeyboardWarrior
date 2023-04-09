import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import {Navigate} from "react-router-dom";

function Info() {
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");

  const navigate=useNavigate();

  const handlePlayer1Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlayer1(event.target.value);
  };

  const handlePlayer2Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlayer2(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    localStorage.setItem("player1Name", player1);
    localStorage.setItem("player2Name", player2);
    navigate("/game")
  };

  if(!localStorage.getItem("token")){
    alert("Please login first!")
return <Navigate to="/"/>
  }

  return (
    <div className="max-w-md mx-auto my-10">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-5">Enter Player Names</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Player 1 Name
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={player1}
              onChange={handlePlayer1Change}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Player 2 Name
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={player2}
              onChange={handlePlayer2Change}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Info;
