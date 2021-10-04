import "bootswatch/dist/cyborg/bootstrap.min.css";
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import { motion } from "framer-motion"
import RPGhome from "./components/RPGhome/RPGhome"
// import Realms from "./components/Realms/Realms";
function App() {
  return (
    <div className="App">
      <motion.div
       animate={{ rotate: 360 }}
       transition={{ duration: 3 }} 
      class="header"><img src="pngsmall.png" alt="logo"></img></motion.div>
      <NavBar/>
      <RPGhome/>
    </div>

  );
}

export default App;
