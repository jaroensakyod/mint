import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage2 from "./components/LandingPage2";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|landingpage2)">
          <LandingPage2 {...landingPage2Data} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const landingPage2Data = {
    desktopHeroLight1: "/img/desktop-hero-light-1@1x.png",
    title: "Are you ready?",
    round: "round",
    number: "1",
    left3030: "Left 30/30",
    mintNow: "mint now",
    get_Price: "GET_PRICE",
    totalSupply33033333: "Total Supply 3303/3333",
    community: "Community",
    roadmap: "Roadmap",
    surname: "Mint Now",
    x51: "/img/5-1@2x.png",
    copywright2022Rnx: "Copywright 2022. Rnx",
};

