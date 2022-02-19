import logo from './logo.svg';
import './App.css';
import Canvas from './components/Canvas';
import Tabbar from './components/Tabbar';

function App() {
  return (
    <div>
      <div className="h-24"></div>
      <div class="w-5/6 justify-center flex flex-row">
      <Canvas></Canvas>
      <Tabbar></Tabbar>
    </div>
    </div>
  );
}

export default App;
