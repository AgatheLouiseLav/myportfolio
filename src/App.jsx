import './App.css';
import {Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Nasa from './components/Nasa/Nasa';
import Moneywise from './components/Moneywise/Moneywise';
import Travel from './components/Travel/Travel';
import Mastermind from './components/Mastermind/Mastermind';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <div className="App">
      <div className="background">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <Navbar />
        <div className='container'>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/nasawebsite" element={<Nasa />}/>
            <Route path="/moneywise" element={<Moneywise />}/>
            <Route path="/traveljournal" element={<Travel />}/>
            <Route path="/mastermind" element={<Mastermind />}/>
          </Routes>
        </div>
        <Footer />
    </div>
  );
}

export default App;
