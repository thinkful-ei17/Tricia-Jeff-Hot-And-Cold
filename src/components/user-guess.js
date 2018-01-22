import React from 'react';


export default function UserGuess(props) {

return  (
  <form>
			<input type="text" name="userGuess" className="text" maxlength="3" autocomplete="off" placeholder="Enter your Guess" required="" />

      <input type="submit" className="button" name="submit" />

      <p>Guess #<span id="count">2</span>!</p>
	</form>
);
}