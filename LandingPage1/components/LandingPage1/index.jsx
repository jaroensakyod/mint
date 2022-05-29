import React from "react";
import "./LandingPage1.css";

function LandingPage1(props) {
  const {
    desktopHeroLight1,
    title,
    rebirthingTheNewG,
    connectWallet,
    community,
    roadmap,
    surname,
    x51,
    copywright2022Rnx,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="landingpage1 screen">
        <div className="desktop-header-light-7">
          <div className="overlap-group2">
            <img className="desktop-header-light-7-1" src="/img/desktop-header-light---7@1x.svg" />
            <div className="overlap-group1">
              <img className="desktop-hero-light-1" src={desktopHeroLight1} />
              <div className="text-content">
                <h1 className="title">{title}</h1>
                <div className="h4">
                  <div className="rebirthing-the-new-g">{rebirthingTheNewG}</div>
                </div>
                <div className="master-button-container">
                  <div className="master-button"></div>
                  <div className="master-button-1">
                    <div className="master-button-2">
                      <div className="connect-wallet montserrat-bold-white-24px">{connectWallet}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="desktop-navbar">
                <div className="right">
                  <div className="desktop-menu">
                    <div className="text-link"></div>
                    <div className="text-link-1">
                      <div className="community montserrat-semi-bold-viking-16px">{community}</div>
                    </div>
                    <div className="text-link-2">
                      <div className="roadmap montserrat-semi-bold-viking-16px">{roadmap}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="master-button-3">
                <div className="surname montserrat-bold-white-24px">{surname}</div>
              </div>
              <div className="rectangle-48"></div>
              <img className="x5-1" src={x51} />
              <div className="subtitle">
                <div className="copywright-2022-rnx">{copywright2022Rnx}</div>
              </div>
              <img className="social-media" src="/img/social-media-1@2x.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage1;
