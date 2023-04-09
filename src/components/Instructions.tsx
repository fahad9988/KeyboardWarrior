import React from 'react';

const Instructions: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Instructions</h1>
      <p className="mb-4">
        Keyboard Warrior is a multiplayer game where each player gets a chance to type a randomly generated string within 10 seconds. If the typed string matches the generated string, the player will be awarded one point. The next player will then get a chance with a newly generated string. The first player to reach a score of 5 points wins the game.
      </p>
      <h2 className="text-2xl font-bold mb-2">How to Play</h2>
      <ol className="list-decimal list-inside mb-4">
        <li>Type your name to join the game</li>
        <li>Wait for another player to join the game</li>
        <li>A random string will be generated for the first player to type</li>
        <li>Type the string before the 10 second timer runs out</li>
        <li>If your string matches the generated string, you'll be awarded one point</li>
        <li>The next player will get a chance with a newly generated string</li>
        <li>The first player to reach a score of 5 points wins the game</li>
      </ol>
      <h2 className="text-2xl font-bold mb-2">Scoring</h2>
      <p className="mb-4">
        Each player starts with 0 points. If you type the generated string correctly within the 10 second timer, you'll be awarded one point. The first player to reach a score of 5 points wins the game.
      </p>
      <h2 className="text-2xl font-bold mb-2">Technical Requirements</h2>
      <p className="mb-4">
        Keyboard Warrior requires a modern web browser with JavaScript enabled. The game is optimized for desktop and laptop computers, but should work on most mobile devices as well.
      </p>
    </div>
  );
};

export default Instructions;
