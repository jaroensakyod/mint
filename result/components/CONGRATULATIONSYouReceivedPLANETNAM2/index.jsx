import React from "react";
import "./CONGRATULATIONSYouReceivedPLANETNAM2.css";

function CONGRATULATIONSYouReceivedPLANETNAM2(props) {
  const { spanText1, spanText2, spanText3 } = props;

  return (
    <div className="congratulations-you-1">
      <h1 className="congratulations-you-2">
        <span className="span0">{spanText1}</span>
        <span className="span1">{spanText2}</span>
        <span className="span2">{spanText3}</span>
      </h1>
    </div>
  );
}

export default CONGRATULATIONSYouReceivedPLANETNAM2;
