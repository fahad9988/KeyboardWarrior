import React from "react";
import Modal, { ModalProps } from "./Modal";

type GameOverModalProps = ModalProps & {
  winner: number;
  onNewGame?: () => void;
  onRestartGame: () => void;
};

const GameOverModal: React.FC<GameOverModalProps> = ({
  winner,
  onRestartGame,
  isOpen,
  onClose,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={`Player ${winner} Wins!`}>
      <div className="bg-white rounded-md px-8 py-6">
        <div className="text-center text-3xl font-bold mb-4">
          {winner === 1 ? "Player 1" : "Player 2"} Wins!
        </div>
        {/* {onNewGame && (
          <div className="flex justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4"
              onClick={onNewGame}
            >
              New Game
            </button>
          </div>
        )} */}
        <div className="flex justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4 ml-2"
            onClick={onRestartGame}
          >
            Restart Game
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default GameOverModal;
