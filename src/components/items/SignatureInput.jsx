import React from "react";
import * as SVG from "components/items/SVG";

const SignatureInput = ({ path }) => {
  const src = process.env.PUBLIC_URL + "/assets/images/signatures/" + path;
  return (
    <div className="signatureInput">
      <div className="signatureInput__edit">{SVG.pen}</div>
      <img src={src} alt="signature" />
    </div>
  );
};

export default SignatureInput;
