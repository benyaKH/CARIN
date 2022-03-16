import { SelectAntibody } from "components";
import styles from './styles.module.css';
import { PauseResume, SpeedButton, BackToMenuButton } from ".";

export const Tabbar = () => {
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
  