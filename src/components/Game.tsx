import React, { useState } from 'react';
import GameBoard from './GameBoard';
import PlayerScore from './PlayerScore';

type GameProps = {};

const Game: React.FC<GameProps> = () => {
  const [randomString, setRandomString] = useState('');
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [gameOver, setGameOver] = useState(false);

  const generateRandomString = (length: number) => {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    setRandomString(result);
  };

  const handleScoreUpdate = (player: number) => {
    if (player === 1) {
      setPlayer1Score(player1Score + 1);
    } else {
      setPlayer2Score(player2Score + 1);
    }
  };

  const handleGameOver = () => {
    setGameOver(true);
  };

  const handleNewGame = () => {
    generateRandomString(10);
    setPlayer1Score(0);
    setPlayer2Score(0);
    setCurrentPlayer(1);
    setGameOver(false);
  };

  const winner = player1Score >= 10 ? 1 : player2Score >= 10 ? 2 : null;

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      {gameOver ? (
        <>
          <p className="mb-4 text-lg font-bold">{`Player ${winner} wins!`}</p>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            onClick={handleNewGame}
          >
            New game
          </button>
        </>
      ) : (
        <>
          <p className="mb-4 text-lg font-bold">{`Player ${currentPlayer}'s turn`}</p>
          <GameBoard
  currentPlayer={currentPlayer}
  setCurrentPlayer={setCurrentPlayer}
  randomString={randomString}
  setRandomString={setRandomString}
  onScoreUpdate={handleScoreUpdate}
  onGameOver={handleGameOver}
  timer={10}
/>

          <div className="flex justify-between w-full mt-4">
            <PlayerScore player={1} score={player1Score} />
            <PlayerScore player={2} score={player2Score} />
          </div>
        </>
      )}
    </div>
  );
};

export default Game;
