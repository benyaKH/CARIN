import styles from './styles.module.css';
import React, { useState } from 'react';

export const ChangeTextButton = () => {
  const [buttonText, setButtonText] = useState("Pause");

  const changeText = () => {
      setButtonText(!buttonText);
  };

  return (
    <button style={{float: 'right'}} className={styles.pauseButton} onClick={changeText}  >{buttonText? "Pause":"Resume"}</button>
  )
};