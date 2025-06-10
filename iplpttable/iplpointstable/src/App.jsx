import React, { useEffect, useState } from 'react';
import './app.css';

const App = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/FreSauce/json-ipl/data')
      .then((res) => res.json())
      .then((data) => {
        // Sort by NRR (Net Run Rate) ascending
        const sortedData = data.sort((a, b) => a.nrr - b.nrr);
        setTeams(sortedData);
      })
      .catch((err) => console.error('Fetch error:', err));
  }, []);

  return (
    <div className="container">
      <h1>IPL 2022 Points Table</h1>
      <table>
        <thead>
          <tr>
            <th>Team</th>
            <th>Matches</th>
            <th>Won</th>
            <th>Lost</th>
            <th>Points</th>
            <th>NRR</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team) => (
            <tr key={team.id}>
              <td>{team.team}</td>
              <td>{team.matches}</td>
              <td>{team.won}</td>
              <td>{team.lost}</td>
              <td>{team.points}</td>
              <td>{team.nrr}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
