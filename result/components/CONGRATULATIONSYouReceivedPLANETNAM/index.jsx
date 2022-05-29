import React from "react";
import CONGRATULATIONSYouReceivedPLANETNAM2 from "../CONGRATULATIONSYouReceivedPLANETNAM2";
import "./CONGRATULATIONSYouReceivedPLANETNAM.css";

function CONGRATULATIONSYouReceivedPLANETNAM(props) {
  const { cONGRATULATIONSYouReceivedPLANETNAM } = props;

  return (
    <div className="congratulations-you">
      <CONGRATULATIONSYouReceivedPLANETNAM2
        spanText1={cONGRATULATIONSYouReceivedPLANETNAM.spanText1}
        spanText2={cONGRATULATIONSYouReceivedPLANETNAM.spanText2}
        spanText3={cONGRATULATIONSYouReceivedPLANETNAM.spanText3}
      />
    </div>
  );
}

export default CONGRATULATIONSYouReceivedPLANETNAM;
