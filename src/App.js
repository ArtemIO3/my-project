import logo from './logo.svg';
import './App.css';
import Find from './components/Find/Find';
import Place from './components/Place/Place';
import FQL from './components/FQL/FQL';
function App() {
  return (
    <div className="App">
      <Find />
      <Place/>
      <FQL/>
    </div>
  );
}

export default App;
