import { Tabbar, ZoomAbleCanvas } from "components";

export const Game = () => {
    return(
        <div>
      <div className="h-24"></div>
      <div className="justify-center flex flex-row">
        <ZoomAbleCanvas></ZoomAbleCanvas>
        <Tabbar></Tabbar>
    </div>
    </div>
    );
}

