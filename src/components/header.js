import React from 'react';

import './header.css'

export default function Header () {
  return( 
  <header> 
    <nav> 
      <ul class="clearfix">
        <li><a className="what" href="#">What ?</a></li>
        <li><a className="new" href="#">+ New Game</a></li>
      </ul>
    </nav>

    <h1>HOT or COLD</h1>

  </header> )
}