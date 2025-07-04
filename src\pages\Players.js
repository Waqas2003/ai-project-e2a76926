import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Players() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    axios.get('https://api.example.com/players')
      .then(response => {
        setPlayers(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Players</h1>
      <ul>
        {players.map(player => (
          <li key={player.id}>{player.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Players;