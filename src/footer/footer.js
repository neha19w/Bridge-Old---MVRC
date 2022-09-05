import "./footer.css";
import React, { useState, useEffect } from "react";

const Footer = () => {
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      console.log(searchTerm);
      // Send Axios request here
    }, 3000);

    // Cleanup fn
    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  return (
    <div
      className="d-flex footer-main"
      onChange={(e) => setSearchTerm(e.target.value)}
    >
      <div className="dot-left-main justify-content-start">
        <div className="dot-left">
          <span class="loader__dot">.</span>
          <span class="loader__dot">.</span>
          <span class="loader__dot">.</span>
          <span class="loader__dot">.</span>
        </div>
        {/* <div><label><b>find sessions</b></label></div> */}
      </div>

      <div className="footer-centre">
        <div>
          {/* <label><b>password required</b></label> */}
        </div>
      </div>

      <div class="footer-end">
        {/* <div><label><b>sessions retrieved</b></label></div> */}
        <div class="dot-right-main">
          <div className="dot-right">
            <span class="loader__dot">.</span>
            <span class="loader__dot">.</span>
            <span class="loader__dot">.</span>
            <span class="loader__dot">.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
