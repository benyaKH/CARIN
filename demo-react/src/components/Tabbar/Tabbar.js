import styles from './styles.module.css';
import { PauseResume, SpeedButton, BackToMenuButton } from ".";
import { setGlobalState, useGlobalState } from '../GlobalState';

export const Tabbar = () => {
    const[ mode, setMode ] = useGlobalState('mode');
    return (
        <div className="w-20 bg-gray-200">
            <div>
                <div className={styles.BoxForButton}>
                    <PauseResume></PauseResume>
                </div>
                <div className={styles.BoxForButton}>
                    <SpeedButton></SpeedButton>
                </div>
                <div className={styles.BoxForButton}>
                <BackToMenuButton 
                onStartClick = {()=> {setMode('start'); window.location.reload();}} 
                ></BackToMenuButton>
                </div>
            </div>
        </div>
    )
  }
  