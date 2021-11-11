import "bootswatch/dist/cyborg/bootstrap.min.css";
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import { motion } from "framer-motion";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from "../src/components/HomePage/HomePage";
import MtgHome from "../src/components/MtgHome/MtgHome";
import RPGhome from "../src/components/RPGhome/RPGhome";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import WoRblog from "./components/WoRblog/WoRblog"
import MtgBlogsHome from "./components/MtgHome/MtgBlogsHome";
import MtgMultiverse from "./components/MtgHome/MtgMultiverse";
import RPGBlogsHome from "./components/RPGhome/RPGBlogsHome";
import RPGMultiverse from "./components/RPGhome/RPGmultiverse";
import OrzhovHumansPA from "./components/MtgHome/MtgBlogs/OrzhovHumansPA";
import FreddyND from "./components/RPGhome/RPGBlogs/FreddyND";
import WHhome from "./components/WHhome/WHhome";
import WHBlogsHome from "./components/WHhome/WHBlogsHome";
import WHMultiverse from "./components/WHhome/WHMultiverse";
import WHintroBW from "./components/WHhome/WHblogs/WHintroBW"
import PokeRPG from "./components/RPGhome/RPGBlogs/PokeRPG";
import RPGready from "./components/RPGhome/RPGBlogs/RPGready"
import Campaign from "./components/RPGhome/RPGBlogs/Campaign";


function App() {

  return (
    <div>
      <Router>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 3 }}
          class="header"
        ><img src="pngsmall.png" alt="logo"></img></motion.div>
        <NavBar />


        <div className="App">
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/mtghome">
              <MtgHome />
            </Route>
            <Route path="/rpghome">
              <RPGhome />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/worblog">
              <WoRblog />
            </Route>
            <Route path="/mtgblogshome">
              <MtgBlogsHome />
            </Route>
            <Route path="/mtgmultiverse">
              <MtgMultiverse />
            </Route>
            <Route path="/rpgblogshome">
              <RPGBlogsHome />
            </Route>
            <Route path="/rpgmultiverse">
              <RPGMultiverse />
            </Route>
            <Route path="/orzhovhumanspa">
              <OrzhovHumansPA />
            </Route>
            <Route path="/freddynd">
              <FreddyND />
            </Route>
            <Route path="/whhome">
              <WHhome />
            </Route>
            <Route path="/whmultiverse">
              <WHMultiverse />
            </Route>
            <Route path="/whblogshome">
              <WHBlogsHome />
            </Route>
            <Route path="/whintrobw">
              <WHintroBW />
            </Route>
            <Route path="/pokerpg">
              <PokeRPG />
            </Route>
            <Route path="/rpgready">
              <RPGready />
            </Route>
            <Route path="/campaign">
              <Campaign />
            </Route>

            {/* 
            
            <Route path="/pokemonhome">
              <PokemonHome />
            </Route>
            <Route path="/fabhome">
              <FABHome />
            </Route>
             */}
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
