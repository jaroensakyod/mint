import React from "react";
import "./LandingPage2.css";

function LandingPage2(props) {
  const {
    desktopHeroLight1,
    title,
    round,
    number,
    left3030,
    mintNow,
    get_Price,
    totalSupply33033333,
    community,
    roadmap,
    surname,
    x51,
    copywright2022Rnx,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="landingpage2 screen">
        <div className="desktop-header-light-7">
          <div className="overlap-group6">
            <img className="desktop-header-light-7-1" src="/img/desktop-header-light---7@1x.svg" />
            <div className="overlap-group5">
              <img className="desktop-hero-light-1" src={desktopHeroLight1} />
              <div className="text-content">
                <h1 className="title">{title}</h1>
                <div className="overlap-group-container">
                  <div className="overlap-group4">
                    <div className="round">{round}</div>
                    <div className="overlap-group2">
                      <div className="number">{number}</div>
                    </div>
                    <div className="left-3030">{left3030}</div>
                    <img className="line-1" src="/img/line-1@2x.svg" />
                  </div>
                  <div className="overlap-group3">
                    <div className="overlap-group">
                      <div className="overlap-group">
                        <div className="rectangle-49"></div>
                        <div className="master-button">
                          <div className="master-button-1">
                            <div className="mint-now montserrat-bold-white-24px">{mintNow}</div>
                          </div>
                          <div className="text-button"></div>
                        </div>
                      </div>
                      <div className="get_price">{get_Price}</div>
                    </div>
                    <div className="total-supply-33033333">{totalSupply33033333}</div>
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
                <div className="master-button-2">
                  <div className="surname montserrat-bold-white-24px">{surname}</div>
                </div>
              </div>
              <div className="rectangle-48"></div>
              <img className="x5-1" src={x51} />
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

export default LandingPage2;
