import React from 'react';
import './user-guess.css';

export default function UserGuess(props) {

return  (
  <div>
    <form>
		  <input type="text" name="userGuess" className="text" maxlength="3" autocomplete="off" placeholder="Enter your Guess" required="" />

      <input type="submit" className="button" name="Guess" />
	  </form>
    <p>Guess #<span id="count">2</span>!</p>
    </div>
);
}