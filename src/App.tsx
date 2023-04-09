import { useState, useEffect } from 'react';
import Header from './components/Header';
import GameBoard from './components/GameBoard';
import PlayerScore from './components/PlayerScore';
import GameOverModal from './components/GameOverModal';
import Footer from './components/Footer';
import { generateRandomString } from './utils';
import Game from './components/Game';
import AllRoutes from './components/AllRoutes';
import Navbar from './components/Navbar';


function App() {
 

  return (
    <div>
      <Navbar/>
    <AllRoutes/>
    </div>
  );
}

export default App;
