import React from "react";
import CONGRATULATIONSYouReceivedPLANETNAM from "../CONGRATULATIONSYouReceivedPLANETNAM";
import "./Result.css";

function Result(props) {
  const {
    desktopHeroLight1,
    x11,
    seeOnParas,
    backToHome,
    community,
    roadmap,
    mintNow,
    copywright2022Rnx,
    cONGRATULATIONSYouReceivedPLANETNAM,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="result screen">
        <div className="desktop-header-light-7">
          <div className="overlap-group2">
            <img className="desktop-header-light-7-1" src="/img/desktop-header-light---7@1x.svg" />
            <div className="overlap-group1">
              <img className="desktop-hero-light-1" src={desktopHeroLight1} />
              <div className="overlap-group">
                <div className="h1">
                  <img className="x1-1" src={x11} />
                  <div className="master-button">
                    <div className="see-on-paras montserrat-bold-white-24px">{seeOnParas}</div>
                  </div>
                </div>
                <div className="master-button-1">
                  <div className="back-to-home montserrat-bold-white-24px">{backToHome}</div>
                </div>
                <CONGRATULATIONSYouReceivedPLANETNAM
                  cONGRATULATIONSYouReceivedPLANETNAM={
                    cONGRATULATIONSYouReceivedPLANETNAM.cONGRATULATIONSYouReceivedPLANETNAM
                  }
                />
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
                <div className="master-button-2">
                  <div className="mint-now montserrat-bold-white-24px">{mintNow}</div>
                </div>
              </div>
              <div className="rectangle-48"></div>
              <div className="subtitle">
                <div className="copywright-2022-rnx">{copywright2022Rnx}</div>
              </div>
              <img className="social-media" src="/img/social-media@2x.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;
