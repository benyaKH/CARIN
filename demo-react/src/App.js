import logo from './logo.svg';
import './App.css';
import Canvas from './components/Canvas';
import Tabbar from './components/Tabbar';
import Menu from './components/Menu';
import Game from './components/Game';

function App() {
  return (
    <div className="background-img  App flex flex-1  flex-col h-full w-full relative">
      <Menu></Menu>
    </div>
  );
}

export default App;
