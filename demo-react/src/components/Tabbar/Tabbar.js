import { SelectAntibody } from "components";

export const Tabbar = () => {
    return (
        <div className="w-72 bg-gray-200 ">
            <p className="m-2 text-red">AntibodyCost</p>
            <div className="flex">
            <SelectAntibody></SelectAntibody>
            <SelectAntibody></SelectAntibody>
            <SelectAntibody></SelectAntibody>
        </div>
        </div>
    )
  }
  