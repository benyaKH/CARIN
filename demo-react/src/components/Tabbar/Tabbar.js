import { SelectAntibody } from "components";
import styles from './styles.module.css';
import { PauseResume, SpeedButton } from ".";

export const Tabbar = () => {
    return (
        <div className="w-72 bg-gray-200">
            <p className="m-2 text-red">
                <div className={styles.BoxForButton}>
                    <SpeedButton></SpeedButton>
                    <PauseResume></PauseResume>
                </div>
                </p>
            <div className={styles.BoxForText}>
                AntibodyCost : 
               </div>
            <div className="flex ">
                <div className={styles.BoxForAntibody}>
                    <SelectAntibody></SelectAntibody>
                    <SelectAntibody></SelectAntibody>
                    <SelectAntibody></SelectAntibody>
                </div>
            </div>
        </div>
    )
  }
  