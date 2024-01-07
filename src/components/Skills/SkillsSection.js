import React from 'react';
import AdvancedSkill from './AdvancedSkill'; // Assuming the file path is correct

const SkillsSection = () => {
  // Sample data for skills
  const skillsData = [
    { id: 1, name: 'HTML/CSS', level: '90%' },
    { id: 2, name: 'JavaScript (React)', level: '95%' },
    { id: 3, name: 'Responsive Design', level: '80%' },
    // Add more skills as needed
  ];

  return (
    <div className="skills-section">
      <h2>Skills</h2>
      <div className="skills-container">
        {skillsData.map((skill) => (
          <AdvancedSkill key={skill.id} name={skill.name} level={skill.level} />
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
