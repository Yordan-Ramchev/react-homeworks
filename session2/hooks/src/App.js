import React from "react";
import List from "./components/List";
import "bulma/css/bulma.css";
import "./App.css";
import data from "./data";

function App() {
  return (
    <main>
      <List title={"Vote for the best pizzas!"} items={data} />
    </main>
  );
}

export default App;
