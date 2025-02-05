import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Dashboard=()=> {
  const [outpassRequests, setOutpassRequests] = useState([]);
  const [reason, setReason] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (!loggedInUser) {
      navigate('/login');
    } else {
      const requests = JSON.parse(localStorage.getItem('outpassRequests')) || [];
      setOutpassRequests(requests.filter((req) => req.user === loggedInUser));
    }
  }, [navigate]);

  const handleRequestOutpass = (e) => {
    e.preventDefault();
    const requests = JSON.parse(localStorage.getItem('outpassRequests')) || [];
    const newRequest = { user: localStorage.getItem('loggedInUser'), reason, status: 'Pending' };
    requests.push(newRequest);
    localStorage.setItem('outpassRequests', JSON.stringify(requests));
    setOutpassRequests([...outpassRequests, newRequest]);
    setReason('');
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <form onSubmit={handleRequestOutpass}>
        <input
          type="text"
          placeholder="Reason for outpass"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          required
        />
        <button type="submit">Request Outpass</button>
      </form>

      <h3>Your Outpass Requests</h3>
      <ul>
        {outpassRequests.map((request, index) => (
          <li key={index}>
            {request.reason} - {request.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
