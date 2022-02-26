import { Canvas, Tabbar } from "components";

export const Game = () => {
    return(
        <div>
      <div className="h-24"></div>
      <div class="justify-center flex flex-row">
        <Canvas/>
        <Tabbar/>
    </div>
    </div>
    );
}