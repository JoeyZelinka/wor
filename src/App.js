import "bootswatch/dist/cyborg/bootstrap.min.css";
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import { motion } from "framer-motion"
import NewWor from "./components/NewWor/NewWor";
function App() {
  return (
    <div className="App">
      <motion.div
       animate={{ rotate: 360 }}
       transition={{ duration: 2 }} 
      class="header"><img src="pngsmall.png" alt="logo"></img></motion.div>
      <NavBar/>
      <NewWor/>
    </div>

  );
}

export default App;
