import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Schedule() {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    axios.get('https://api.example.com/schedule')
      .then(response => {
        setSchedule(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Schedule</h1>
      <ul>
        {schedule.map(match => (
          <li key={match.id}>{match.date} - {match.team1} vs {match.team2}</li>
        ))}
      </ul>
    </div>
  );
}

export default Schedule;