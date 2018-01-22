import React from 'react';

// import './guesslist.css';

// import Guess from './guess';

export default function GuessList(props) {

const guesses = [
  {
    number: 20,
  },
  {
    number: 40,
  }
];

const guessListResults = guesses.map((guess) => (
  <li> 
    {guess.number}
  </li>
));

  return (

      <ul className='guessBox'>
        {guessListResults}
      </ul>

  );
}

