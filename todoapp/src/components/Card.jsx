import React from 'react';
import styles from '../styles/Card.module.css'; 
import contract from '../contractInfo/contract';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';

const Card = ({ id, content, completed }) => {
  
  return (
    <div className={`${styles.card}`}>
      <div className={`${styles.cardContent}`}>
        <p className={`${styles.cardText}`}>{content}</p>
      </div>
      <div className={`${styles.doneIconContainer}`}>
        {completed ? <DoneOutlineIcon /> : <RotateLeftIcon />}
      </div>
    </div>
  );
}

export default Card;
