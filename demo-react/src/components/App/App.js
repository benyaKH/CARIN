import styles from './styles.module.css';
import { useState } from 'react';
import { StartMenu, Game } from '..';
import { createGlobalState } from 'react-hooks-global-state';
import { setGlobalState, useGlobalState } from '../GlobalState';


export const App = () => {
  // const initialState = { mode: 'start' };
  // const { useGlobalState } = createGlobalState(initialState);
  // const [mode, setMode] = useGlobalState('mode');
  const[ mode, setMode ] = useGlobalState('mode');
  
  return <div className={styles.main}>
    {mode === 'start' && <StartMenu onStartClick = {()=>setMode('Game')}/>}

    {mode === 'Game' && <Game/>}

    {mode === 'GameOver' && <>Game Over</>}

  </div>
}
