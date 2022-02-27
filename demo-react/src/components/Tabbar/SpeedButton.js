import styles from './styles.module.css';
import React, { useState } from 'react';

export const SpeedButton = () => {
  const [buttonText, setButtonText] = useState("X2");

  const changeText = () => {
      setButtonText(!buttonText);
  };

  return (
    <button style={{float: 'right'}} className={styles.Button} onClick={changeText}  >{buttonText? "X2":"X1"}</button>
  )
};