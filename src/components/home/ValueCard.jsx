import React from 'react';
import '../../styles/home/ValueCard.css';

const ValueCard = ({title, description}) => {
  return (
    <div className="value-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ValueCard; 