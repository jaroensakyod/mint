import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Result from "./components/Result";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|result)">
          <Result {...resultData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const cONGRATULATIONSYouReceivedPLANETNAM2Data = {
    spanText1: <React.Fragment>CONGRATULATIONS!<br /><br />You Received zilla_name !<br /></React.Fragment>,
    spanText2: <React.Fragment>Type: zilla_type<br /></React.Fragment>,
    spanText3: "Attributes: Atrribute_name1, Atrribute_name2, Atrribute_name3, Atrribute_name4,Atrribute_name5, Atrribute_name6",
};

const cONGRATULATIONSYouReceivedPLANETNAMData = {
    cONGRATULATIONSYouReceivedPLANETNAM: cONGRATULATIONSYouReceivedPLANETNAM2Data,
};

const resultData = {
    desktopHeroLight1: "/img/desktop-hero-light-1@1x.png",
    x11: "/img/1-1@1x.png",
    seeOnParas: "See on Paras",
    backToHome: "Back to Home",
    community: "Community",
    roadmap: "Roadmap",
    mintNow: "Mint Now",
    copywright2022Rnx: "Copywright 2022. Rnx",
    cONGRATULATIONSYouReceivedPLANETNAM: cONGRATULATIONSYouReceivedPLANETNAMData,
};

