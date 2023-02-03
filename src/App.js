
import './App.css';
import Intro from './Components/Intro/Intro';
import Navbar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import Body from './Components/Body/Body';
import  Clores from './Components/Clores/Clores';
import Feature from './Components/Feature/Feature';
import Publicite from './Components/Publicite/Publicite';


function App() {
  return (
    <div className="App">
   
      <Navbar/>
      <Intro/>
      <Clores/>
      <Publicite/>
      <Feature/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
