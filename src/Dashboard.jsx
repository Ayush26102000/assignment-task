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
   
    <div className="dashboard-container  ">
      <h1 className="dashboard-heading  animate__animated animate__zoomInLeft"> Welcome to Dashboard</h1>
      <div className="dashboard-content animate__animated animate__zoomInLeft">

        <div className="dashboard-metrics">
          <h1 style={{color:'#0e8388',paddingLeft: '0'}}>Metrics </h1>
          <h2 style={{color:'#2E4F4F',padding:'.5rem 0'}}>Test Taken</h2>
          <h3 style={{color:'#2E4F4F',padding:'.5rem 0'}}>Test score : good </h3>
          <h3 style={{color:'#2E4F4F',padding:'.5rem 0'}}>Score rating : Average</h3>
        </div>
        <div className="dashboard-consult">
          <h1 style={{color:'#0e8388'}}>Book Your Consult</h1>
          <Dropdown className="dashboard-dropdown" options={options} onChange={handleSelect} value={selectedOption} placeholder="Select an option" />
          <input className="dashboard-date" type='date' />
          <button className="dashboard-booknow-btn">Book Now</button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
