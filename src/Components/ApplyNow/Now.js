import React from "react";
import PC1 from "../PC/PC1";
import PCList from "../PC/PCList";
import "./Now.css";
const PROGRAM_CONDITIONS = [
  
  {
      
    id: "m1",
    name: "FrontEnd Devloper",
    description:
      "Our Front-end Development programme is where programming and creativity collide to build intricate, inventive and interesting web interfaces by applying animations and motions, and advanced web programming, including JavaScript, WebGL and CSS.",
  },
  {
    id: "m2",
    name: "Computer Sicence",
    description:
      "Our Computer Science programme has solid roots in mathematics and engineering, while our innovative department optimises the relevance of the programme by including disciplines such as linguistics, psychology, economics, physics and music.",
  },
  {
    id: "m3",
    name: "Data Scince",
    description:
      "While the world holds its breath in anticipation of the Age of the Petabyte, we’re getting ready for the Age of the Exabyte. The Data Science programme is the first dedicated BSc programme in the world.",
  },
  {
    id: "m4",
    name: "Intractive Desgin",
    description:
      "This is where machines meet humans, and vice versa. Good interaction design of our digital surroundings is imperative to their functionality. The department of Interaction Design is led by internationally renowned creative UXD duo Irene Pereyra and Anton Repponen.",
  },
];

const Now = () => {
  const ApplyNow = PROGRAM_CONDITIONS.map((pg) => (
    <PCList
      className="badge"
      key={pg.id}
      name={pg.name}
      description={pg.description}
      
    />
  ));
  return (
    <section>
      <PC1>
        <ul>{ApplyNow}</ul>
      </PC1>
    </section>
  );
};

export default Now;
