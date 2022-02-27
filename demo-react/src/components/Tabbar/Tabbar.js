import { SelectAntibody } from "components";
import styles from './styles.module.css';
import { ChangeTextButton } from ".";

export const Tabbar = () => {
    return (
        <div className="w-72 bg-gray-200">
            <p className="m-2 text-red">AntibodyCost : 
                <ChangeTextButton></ChangeTextButton>
            </p>
        <div className="flex">
            <div className={styles.gap}>
            <SelectAntibody></SelectAntibody>
            <SelectAntibody></SelectAntibody>
            <SelectAntibody></SelectAntibody>
            </div>
        </div>
        </div>
    )
  }
  