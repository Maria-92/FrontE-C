import { Fragment } from "react";
import React from "react";
import "./Footer.css";

const Footer = (props) => {
  return (
    <Fragment>
      <footer className="F">
        <table>
          <tr>
            <th>
              <p className="p ">
                &nbsp;Zeptolab &nbsp;&nbsp;Location &nbsp;&nbsp; Duration
                &nbsp;&nbsp; Start date &nbsp;&nbsp; Application Deadline
                &nbsp;&nbsp; Application closes in
              </p>
            </th>
          </tr>
          <tr>
            <td>
              <p className="p1">
                &nbsp;&nbsp;&nbsp;Marketing &nbsp;&nbsp;&nbsp;&nbsp; Bangkok
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1 Year Full-Time
                &nbsp;&nbsp;&nbsp; 3 Aug 2020
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 30 June 2020
                &nbsp;&nbsp;
              </p>
            </td>
          </tr>
        </table>
      </footer>
    </Fragment>
  );
};

export default Footer;
