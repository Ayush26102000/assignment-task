import React, { useState } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './Dashboard.css';
import 'animate.css';

const options = [
  ' Expert one', '  Expert two', ' Expert three'
];

const defaultOption = options[0];

const Dashboard = () => {
  const [selectedOption, setSelectedOption] = useState(defaultOption);

  const handleSelect = (option) => {
    setSelectedOption(option);
  }

  return (
   
    <div className="dashboard-container animate__animated animate__zoomInLeft ">
      <h1 className="dashboard-heading"> Welcome to Dashboard</h1>
      <div className="dashboard-content">

        <div className="dashboard-metrics">
          <h1>Metrics </h1>
          <h2>Test Taken</h2>
          <h3>Test score : good </h3>
          <h3>Score rating : Average</h3>
        </div>
        <div className="dashboard-consult">
          <h1>Book Your Consult</h1>
          <Dropdown className="dashboard-dropdown" options={options} onChange={handleSelect} value={selectedOption} placeholder="Select an option" />
          <input className="dashboard-date" type='date' />
          <button className="dashboard-booknow-btn">Book Now</button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
