import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Cards from './Components/Cards';
import Section1 from './Components/Section1';
import Section2 from './Components/Section2';
import SecLinks3 from './Components/SecLinks3';
import Section4 from './Components/Section4';


import './App.css';

// import Categories from "./Components/Categories"
// import Develop from './Components/Develop';
import BackgroundImage from './Components/BackgroundImage';
import MidContent from './Components/MidContent';


function App() {
  return (
    <div className="App">
    <div id="wholebody">
    <Navbar/>
    <BackgroundImage/>
    <MidContent/>
    <Section1/>
    <Section2/>
    <SecLinks3/>
    <Cards/>
    <Section4/>  
    <Footer/>
  
    
    </div>
    </div>
  );
}

export default App;
