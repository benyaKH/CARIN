import styles from './styles.module.css';
import React from 'react';

export const BackToMenuButton = ({onStartClick}) => {
  return (
    <button style={{float: 'right'}} className={styles.Button} onClick={onStartClick}  >Menu</button>
  )
};