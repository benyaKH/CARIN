import { SelectAntibody } from "components";
import styles from './styles.module.css';


export const Tabbar = () => {
    return (
        <div className="w-72 bg-gray-200 ">
            <p className="m-2 text-red">AntibodyCost <button className={styles.pauseButton}>Pause</button></p>
        <div className="flex">
            <SelectAntibody></SelectAntibody>
            <SelectAntibody></SelectAntibody>
            <SelectAntibody></SelectAntibody>
        </div>
        </div>
    )
  }
  