import React from "react";
import { Router } from "@reach/router";
import About from "../../components/About/About";
import Landingpage from "../../components/Landingpage/Landingpage";
import Navmap from "../../components/Navmap/Navmap";
import Projects from "../../components/Projects/Projects";
import Sayhello from "../../components/Sayhello/Sayhello";
import Skills from "../../components/Skills/Skills";

// import beers from "./beers";

const Routes = (props) => {
  //   const [isNavbarHidden, setIsNavbarHidden] = useState(false);

  return (
    <Router>
      {/* {isNavbarHidden ? null : <Navbar />} */}

      <Landingpage path="/" />
      <Navmap path="/map" />
      <About path="/About" />
      <Skills path="/Skills" />
      <Projects path="/Projects" />
      <Sayhello path="/Sayhello" />
    </Router>
  );
};

export default Routes;
