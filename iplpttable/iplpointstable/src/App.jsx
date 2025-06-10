import { useEffect, useState } from 'react';
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
  if (loading) return <p style={styles.message}>Loading IPL Points Table...</p>;
  if (error) return <p style={{ ...styles.message, color: 'red' }}>{error}</p>;
  return (
    <div style={styles.wrapper}>
      <h2 style={styles.heading}>IPL 2022 Points Table</h2>
      <table style={styles.table}>
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
            <tr key={team.Team} style={index % 2 === 0 ? styles.evenRow : styles.oddRow}>
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
const styles = {
  wrapper: {
    padding: '20px',
    fontFamily: 'Segoe UI, sans-serif',
    textAlign: 'center',
  },
  heading: {
    marginBottom: '20px',
    color: '#0077cc',
  },
  message: {
    textAlign: 'center',
    fontSize: '18px',
    marginTop: '50px',
  },
  table: {
    width: '90%',
    maxWidth: '800px',
    margin: '0 auto',
    borderCollapse: 'collapse',
    boxShadow: '0 0 12px rgba(0, 0, 0, 0.1)',
  },
  evenRow: {
    backgroundColor: '#f2faff',
  },
  oddRow: {
    backgroundColor: '#ffffff',
  },
  'th, td': {
    padding: '10px',
    border: '1px solid #ccc',
  },
};
export default IPLPointsTable;