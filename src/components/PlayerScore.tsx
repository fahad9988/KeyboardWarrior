import React from 'react';

type PlayerScoreProps = {
  player: number;
  score: number;
  isActive?: boolean;
};

const PlayerScore: React.FC<PlayerScoreProps> = ({ player, score }) => {

  return (
    <div className="flex flex-col items-center justify-center mx-4">
      <div className="text-gray-400 font-semibold uppercase">{player==1?localStorage.getItem("player1Name"):localStorage.getItem("player2Name")}</div>
      <div className="text-6xl font-bold">{score}</div>
    </div>
  );
};

export default PlayerScore;
