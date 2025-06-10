import { useEffect, useState } from 'react';
import './app.css';

const IPLPointsTable = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://my-json-server.typicode.com/FreSauce/json-ipl/data');
        const data = await res.json();
        const sorted = data.sort((a, b) => parseFloat(a.NRR) - parseFloat(b.NRR));
        setTeams(sorted);
      } catch (err) {
        console.error('Fetch error:', err);
        setError('Failed to load IPL data. Please check your connection and try again.');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <p className="message">Loading IPL Points Table...</p>;
  if (error) return <p className="message" style={{ color: 'red' }}>{error}</p>;

  return (
    <div className="wrapper">
      <h2 className="heading">IPL 2022 Points Table</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Pos</th>
            <th>Team</th>
            <th>Matches</th>
            <th>Won</th>
            <th>Lost</th>
            <th>NRR</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, index) => (
            <tr key={team.Team} className={index % 2 === 0 ? 'evenRow' : 'oddRow'}>
              <td>{index + 1}</td>
              <td>{team.Team}</td>
              <td>{team.Matches}</td>
              <td>{team.Won}</td>
              <td>{team.Lost}</td>
              <td>{parseFloat(team.NRR).toFixed(2)}</td>
              <td>{team.Points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IPLPointsTable;
