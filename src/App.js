
import Navbr from "./Components/Navbr"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header"
import BodyBox from "./Components/BodyBox";
import Works from "./Components/Works";

function App() {
  return (
    <div>
      <Navbr/>
      <Header/> 
      <BodyBox/> 
      <Works/>  
    </div>
  );
}

export default App;
