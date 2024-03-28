import React from 'react';
import '../styles/Card.css'; 
import contract from '../contractInfo/contract';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';

const Card = ({ id, content, completed }) => {
  
  return (
    <div className="card">
      <div className="card-content">
        <h2 className="card-title">{id}</h2>
        <p className="card-text">{content}</p>
      </div>
      <div className="done-icon-container">
        {completed ? <DoneOutlineIcon /> : <RotateLeftIcon />}
      </div>
    </div>
  );
}

export default Card;
