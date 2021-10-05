import "bootswatch/dist/cyborg/bootstrap.min.css";
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import { motion } from "framer-motion"
import BlogTemplate from "./components/Blogs/BlogTemplate";

// import Realms from "./components/Realms/Realms";
function App() {
  return (
    <div className="App">
      <motion.div
       animate={{ rotate: 360 }}
       transition={{ duration: 3 }} 
      class="header"><img src="pngsmall.png" alt="logo"></img></motion.div>
      <NavBar/>
      <BlogTemplate/>
    </div>

  );
}

export default App;
