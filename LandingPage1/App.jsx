import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage1 from "./components/LandingPage1";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|landingpage1)">
          <LandingPage1 {...landingPage1Data} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const landingPage1Data = {
    desktopHeroLight1: "/img/desktop-hero-light-1@1x.png",
    title: "The Save Planet Project",
    rebirthingTheNewG: <React.Fragment>Rebirthing the new generations of everlasting galaxy<br />with the 3,333 unique NFT planets in the nearverse</React.Fragment>,
    connectWallet: "connect wallet",
    community: "Community",
    roadmap: "Roadmap",
    surname: "Mint Now",
    x51: "/img/5-1@2x.png",
    copywright2022Rnx: "Copywright 2022. Rnx",
};

