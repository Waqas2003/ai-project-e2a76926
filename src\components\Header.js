import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/players">Players</Link></li>
          <li><Link to="/schedule">Schedule</Link></li>
          <li><Link to="/news">News</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;