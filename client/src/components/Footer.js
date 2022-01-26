import React from "react";
import "../styles/Footer.css";
//edit

export default function Footer() {
  return (
    <>
      <footer>
        <div className="copyright-notice">
          <span>&copy;</span>
          <span property="dc:date" datatype="xsd:gYear">
            2022
          </span>
          <span> PocketRM. All Rights Reserved.</span>
        </div>
      </footer>
    </>
  );
}
