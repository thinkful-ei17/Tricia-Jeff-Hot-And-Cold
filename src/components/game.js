import React from 'react';

import GuessList from './guesslist';
import UserGuess from './user-guess';
import Status from './status';

import './game.css';



export default function Game() {

  return (
    <section className="game">
      <Status />
      <UserGuess />
      <GuessList />
    </section>
  );

}
