import React from "react";
import "./App.css";
import List from "./components/List";
import data from "./data";
import "bulma/css/bulma.css";

function App() {
  return <List title={"Vote for the best pizzas!"} items={data} />;
}

export default App;
