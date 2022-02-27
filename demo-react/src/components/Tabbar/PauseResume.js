import styles from './styles.module.css';
import React, { useState } from 'react';

export const PauseResume = () => {
  const [buttonText, setButtonText] = useState("Pause");

  const changeText = () => {
      setButtonText(!buttonText);
  };

  return (
    <button style={{float: 'right'}} className={styles.Button} onClick={changeText}  >{buttonText? "Pause":"Resume"}</button>
  )
};