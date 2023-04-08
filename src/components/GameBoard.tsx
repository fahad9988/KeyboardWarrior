import React, { useState, useEffect, useRef } from "react";
import classnames from "classnames";
import { generateRandomString } from '../utils';

type GameBoardProps = {
  randomString: string;
  currentPlayer: number;
  onScoreUpdate: (player: number) => void;
  onGameOver: () => void;
  setCurrentPlayer: (player: number) => void;
  setRandomString: React.Dispatch<React.SetStateAction<string>>;
  timer: number;
};

const GameBoard: React.FC<GameBoardProps> = ({
  randomString,
  currentPlayer,
  onScoreUpdate,
  onGameOver,
  setCurrentPlayer,
  setRandomString,
  timer
}) => {
  const [typedString, setTypedString] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // useEffect(() => {
  //   if (timeRemaining === 0) {
  //     onGameOver();
  //   } else {
  //     const timerId = setTimeout(() => {
  //       setTimeRemaining(time => time - 1);
  //     }, 1000);

  //     return () => {
  //       clearTimeout(timerId);
  //     };
  //   }
  // }, [timeRemaining, onGameOver]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTypedString(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (typedString === randomString && timer > 0) {
      onScoreUpdate(currentPlayer);
      setTypedString("");
      setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
      setRandomString(generateRandomString(10));
    }else{
      onScoreUpdate(0);
      setTypedString("");
      setRandomString(generateRandomString(10));
    }

  };

  // const generateRandomString = () => {
  //   const length = 5;
  //   const characters =
  //     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  //   let result = "";
  //   for (let i = 0; i < length; i++) {
  //     result += characters.charAt(Math.floor(Math.random() * characters.length));
  //   }
  //   return result;
  // };

  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <div className="text-xl mb-4">
        Player {currentPlayer}'s turn ({timer}s remaining)
      </div>
      <div className="text-2xl font-bold mb-4">{randomString}</div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          className={classnames(
            "border-gray-400 border-2 px-4 py-2 w-64 rounded-md text-lg focus:outline-none focus:border-blue-400",
            {
              "border-red-400": typedString.length > 0 && typedString !== randomString,
              "border-green-400": typedString === randomString && timer > 0,
            }
          )}
          value={typedString}
          onChange={handleInputChange}
          disabled={timer === 0}
          ref={inputRef}
        />
        <button
          type="submit"
          className="ml-2 py-2 px-4 bg-blue-600 text-white rounded-md text-lg disabled:opacity-50"
          disabled={timer === 0}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default GameBoard;
