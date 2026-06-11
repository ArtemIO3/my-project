import logo from './logo.svg';
import './App.css';
import Find from './components/Find/Find';
import Place from './components/Place/Place';
import FQL from './components/FQL/FQL';
import Footer from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import RentiqPage from './components/Rentiqpage/Rentiqpage';
function App() {
  return (
    <div className="App">
      {/* <Header />
      <Find />
      <Place/>
      <FQL/>
      <Footer/> */}
      <RentiqPage />
    </div>
  );
}

export default App;
