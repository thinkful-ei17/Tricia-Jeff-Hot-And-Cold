import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GuessList from './components/guesslist';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<GuessList />, document.getElementById('root'));
registerServiceWorker();

//Mapping out Components

/* High Level Components
1. Nav
2. Header - contains H1
3. Game
  - Status
  - Guess
  - Guess List
    -Guess
*/

