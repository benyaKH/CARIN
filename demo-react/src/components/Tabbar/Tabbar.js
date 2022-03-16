import { SelectAntibody } from "components";
import styles from './styles.module.css';
import { PauseResume, SpeedButton, BackToMenuButton } from ".";
import { setGlobalState, useGlobalState } from '../GlobalState';

export const Tabbar = () => {
    const[ mode, setMode ] = useGlobalState('mode');
    return (
        <div className="w-72 bg-gray-200">
            <div className="m-2 text-red">
                <div className={styles.BoxForButton}>
                    <SpeedButton></SpeedButton>
                    <PauseResume></PauseResume>
                </div>
                </div>
            <div className={styles.BoxForText}>
                AntibodyCost : 
               </div>
            <div className="flex ">
                <div className={styles.BoxForAntibody}>
                    <SelectAntibody>
                        <svg className={styles.Antibody1}></svg>
                    </SelectAntibody>
                    <SelectAntibody>

                    </SelectAntibody>
                    <SelectAntibody>

                    </SelectAntibody>
                </div>
            </div>
            <div>
                <BackToMenuButton onStartClick = {()=>setMode('start')} ></BackToMenuButton>
            </div>
        </div>
    )
  }
  