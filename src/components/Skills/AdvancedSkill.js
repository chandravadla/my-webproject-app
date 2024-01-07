import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const AdvancedSkill = ({ name, level }) => {
  // Assuming levels are represented as percentages
  const percentage = parseInt(level.replace(/[^\d.]/g, ''), 10); // Extract numbers

  return (
    <div className="advanced-skill">
      <h3>{name}</h3>
      <div style={{ width: '100px' }}>
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            textSize: '16px',
            pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
            textColor: '#f88',
            trailColor: '#d6d6d6',
          })}
        />
      </div>
    </div>
  );
};

export default AdvancedSkill;
