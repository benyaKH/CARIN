import { Canvas, Tabbar } from "components";

export const Game = () => {
    return(
        <div>
      <div className="h-24"></div>
      <div class="w-5/6 justify-center flex flex-row">
        <Canvas/>
        <Tabbar/>
    </div>
    </div>
    );
}