import { useState, useEffect } from 'react';
import Header from './components/Header';
import GameBoard from './components/GameBoard';
import PlayerScore from './components/PlayerScore';
import GameOverModal from './components/GameOverModal';
import Footer from './components/Footer';
import { generateRandomString } from './utils';

function App() {
  const [randomString, setRandomString] = useState('');
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(0);
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    setRandomString(generateRandomString(10));
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);
    handleGameOver()

    return () => clearInterval(intervalId);
  });

  useEffect(() => {
    if (timer === 0) {
      handleScoreUpdate(0);
    }
  }, [timer]);

  const handleScoreUpdate = (player:number) => {
    if (player === currentPlayer) {
      if (timer > 0) {
        if (player === 1) {
          setPlayer1Score((prevScore) => prevScore + 1);
        } else {
          setPlayer2Score((prevScore) => prevScore + 1);
        }
      }
    } else {
      setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
    }

    setRandomString(generateRandomString(10));
    setTimer(10);
  };

  const handleGameOver = () => {
    if(player1Score==10){
      setGameOver(true);
      setWinner(1);
    }else if(player2Score==10){
      setGameOver(true);
      setWinner(2);
    }
    
  };

  const handleRestartGame = () => {
    setPlayer1Score(0);
    setPlayer2Score(0);
    setGameOver(false);
    setWinner(0);
    setRandomString(generateRandomString(10));
    setTimer(10);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-100">
      <Header />
      <div className="flex flex-col md:flex-row items-center justify-center w-full">
        <PlayerScore player={1} score={player1Score} isActive={currentPlayer === 1} />
        <GameBoard
          randomString={randomString}
          currentPlayer={currentPlayer}
          setCurrentPlayer={setCurrentPlayer}
          setRandomString={setRandomString}
          onScoreUpdate={handleScoreUpdate}
          onGameOver={handleGameOver}
          timer={timer}
        />
        <PlayerScore player={2} score={player2Score} isActive={currentPlayer === 2} />
      </div>
      {gameOver && (
  <GameOverModal
  isOpen={gameOver}
  onClose={() => {  
    setPlayer1Score(0);
    setPlayer2Score(0);
    setGameOver(false);
    setWinner(0);
    setRandomString(generateRandomString(10));
    setTimer(10);}}
  title={`Player ${winner} Wins!`}
  winner={winner}
  onRestartGame={handleRestartGame}
  children={null}
/>
)}
      <Footer />
    </div>
  );
}

export default App;
