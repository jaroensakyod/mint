import React from "react";
import "./Error.css";

function Error(props) {
  const {
    desktopHeaderLight7,
    desktopHeroLight1,
    title,
    transactionFailed,
    line1,
    x51,
    tryAgain,
    fontistoRedo,
    community,
    roadmap,
    mintNow,
    copywright2022Rnx,
    socialMedia,
  } = props;

  return (
    <div className="error screen">
      <div className="desktop-header-light-7">
        <div className="overlap-group3">
          <img className="desktop-header-light-7-1" src={desktopHeaderLight7} />
          <div className="overlap-group2">
            <img className="desktop-hero-light-1" src={desktopHeroLight1} />
            <div className="text-content">
              <div className="h1">
                <div className="overlap-group1">
                  <div className="overlap-group">
                    <h1 className="title">{title}</h1>
                    <div className="transaction-failed">{transactionFailed}</div>
                    <img className="line-1" src={line1} />
                  </div>
                  <img className="x5-1" src={x51} />
                </div>
                <div className="big-button">
                  <div className="master-button">
                    <div className="text-button">
                      <div className="try-again montserrat-bold-white-24px">{tryAgain}</div>
                      <img className="fontistoredo" src={fontistoRedo} />
                    </div>
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
              <div className="big-button-1">
                <div className="master-button">
                  <div className="text-button-1">
                    <div className="mint-now montserrat-bold-white-24px">{mintNow}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rectangle-48"></div>
            <div className="subtitle">
              <div className="copywright-2022-rnx">{copywright2022Rnx}</div>
            </div>
            <img className="social-media" src={socialMedia} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Error;
