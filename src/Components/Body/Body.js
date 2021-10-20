import React from "react";
import "./Body.css";
import Logo from "../../Assets/2.png";
import clickHandler, { Fragment } from "react";

const Body = () => {
  return (
    <Fragment>
      <section className="summary">
        <h2>Interaction Design Apprenticeship</h2>
        <p className="p2">
          A fully funded work-study program to launch your tech career
        </p>
        <p>
          Harbour.Space has partnered with SCG to empower driven talent and
          eliminate the barriers to accessing exceptional education and career
          opportunities through a Masters Fellowship.
          <h4>Position: Marketing Performance</h4>
          <button onClick={clickHandler} className="btn1_body">
            Apply Now
          </button>
        </p>
      </section>
      <section className="summarys">
        <table>
          <tr>
            <th>
              {" "}
              Power by :<p className="p">Zeptolab</p>
              <img src={Logo} alt="Pattern" className="log1" />
            </th>
            <th className="p"> </th>
          </tr>
          <tr>
            <td className="container_2 ">
              <p>Application Closed In</p>
              <br />
              <div className="p"> 6 Day : 22 Hrs : 56 Min : 13 Seg </div>
            </td>
          </tr>
          <tr>
            <td className="container_2 ">
              Location &nbsp;&nbsp;&nbsp;Duration <br />
              <p className="p">Bangkok &nbsp;&nbsp;&nbsp;1 Year Full-Time</p>
              <br />
              Start date &nbsp;&nbsp;&nbsp;End date
              <br />
              <p className="p">30 Jun 2020 &nbsp;&nbsp;&nbsp;3 Aug 2020</p>
            </td>
          </tr>
        </table>
      </section>
    </Fragment>
  );
};

export default Body;
