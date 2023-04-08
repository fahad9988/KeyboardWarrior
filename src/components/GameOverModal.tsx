import React from "react";
import Modal, { ModalProps } from "./Modal";

type GameOverModalProps = ModalProps & {
  winner: number;
  showModal: boolean;
  onNewGame?: () => void;
  onRestartGame: () => void;
};

const GameOverModal: React.FC<GameOverModalProps> = ({
  winner,
  showModal,
  onNewGame,
  onRestartGame,
  isOpen,
  onClose,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={`Player ${winner} Wins!`} showModal={showModal}>
      <div className="bg-white rounded-md px-8 py-6">
        <div className="text-center text-3xl font-bold mb-4">
          {winner === 1 ? "Player 1" : "Player 2"} Wins!
        </div>
        <div className="flex justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4"
            onClick={onRestartGame}
          >
            New Game
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default GameOverModal;
