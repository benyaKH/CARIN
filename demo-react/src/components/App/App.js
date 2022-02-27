import styles from './styles.module.css';
import { useState } from 'react';
import { StartMenu, Game } from '..';

export const App = () => {

  const [mode, setMode] = useState('start');
  
  return <div className={styles.main}>
    {mode === 'start' && <StartMenu onStartClick = {()=>setMode('Game')}/>}

    {mode === 'Game' && <Game/>}

    {mode === 'GameOver' && <>Game Over</>}

  </div>
}
