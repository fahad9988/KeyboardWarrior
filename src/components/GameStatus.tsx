import React from 'react';

type GameStatusProps = {
  winner: number | null;
};

const GameStatus: React.FC<GameStatusProps> = ({ winner }) => {
  return (
    <div className="w-full flex items-center justify-center">
      {winner === null ? (
        <p className="text-lg font-bold">Game in progress</p>
      ) : (
        <p className="text-lg font-bold">{`Player ${winner} wins!`}</p>
      )}
    </div>
  );
};

export default GameStatus;
