import React from 'react';

import './header.css'

export default function Header () {
  return( 
  <header> 
    <nav> 
      <ul class="clearfix">
        <li><a class="what" href="#">What ?</a></li>
        <li><a class="new" href="#">+ New Game</a></li>
      </ul>
    </nav>

    <h1>HOT or COLD</h1>

  </header> )
}