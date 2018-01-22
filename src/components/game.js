import React from 'react';

import GuessList from './guesslist';
import UserGuess from './user-guess';
import Status from './status';
import Header from './header';

export default function Game() {

  return (
    <section className="game">
      <Header />
      <Status />
      <UserGuess />
      <GuessList />

    </section>
  );

}
