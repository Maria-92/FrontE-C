import { Fragment } from "react";
import React from "react";
import "./Header.css";
//import BackImge from "../../Assets/3.png";
//import Logo from "../../Assets/2.png";

const Header = (props) => {
  return (
    <Fragment>
      <header className="header">
        HARBOUR.SPACE <h6 className="header_1"> /Interative Desgin</h6>{" "}
      </header>

      <div>
        {/* <img src={BackImge} alt="Pattern2" className="main-image" /> */}
        {/* <img src={Logo} alt="Pattern" className="img_log ,container_2" /> */}
      </div>
    </Fragment>
  );
};

export default Header;
