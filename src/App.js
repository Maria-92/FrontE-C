import React from "react";
import Header from "./Components/Layout/Header";
import Button from "./Components/Layout/Button";
import Now from "./Components/ApplyNow/Now";

import Footer from "./Components/Layout/Footer";
import Body from "./Components/Body/Body";
import PC1 from "./Components/PC/PC1";

function App() {
  return (
    <div>
      <Header></Header>
      <Button></Button>
      <Body></Body>
      <Now></Now>
      <PC1></PC1>
      <Footer></Footer>
    </div>
  );
}

export default App;
