import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Error from "./components/Error";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|error)">
          <Error {...errorData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const errorData = {
    desktopHeaderLight7: "/img/desktop-header-light---7@1x.png",
    desktopHeroLight1: "/img/desktop-hero-light-1@1x.png",
    title: "Error",
    transactionFailed: "Transaction failed",
    line1: "/img/line-1@2x.png",
    x51: "/img/5-1@1x.png",
    tryAgain: "Try Again",
    fontistoRedo: "/img/fontisto-redo@2x.png",
    community: "Community",
    roadmap: "Roadmap",
    mintNow: "Mint Now",
    copywright2022Rnx: "Copywright 2022. Rnx",
    socialMedia: "/img/social-media@2x.png",
};

