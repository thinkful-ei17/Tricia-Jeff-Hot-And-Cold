import React from 'react';

import GuessList from './guesslist';
import UserGuess from './user-guess';
// import Status from './status';

export default function Game() {

  return (
    <div className="game">
      <UserGuess />
      <GuessList />
    </div>
  );

}
