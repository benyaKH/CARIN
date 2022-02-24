import Canvas from "./Canvas";
import Tabbar from "./Tabbar";
const Game = () => {
    return(
        <div>
      <div className="h-24"></div>
      <div class="w-5/6 justify-center flex flex-row">
      <Canvas></Canvas>
      <Tabbar></Tabbar>
    </div>
    </div>
    );
}

export default Game