import React from "react";
import List from "./components/List";
import "bulma/css/bulma.css";
import "./App.css";
import PostsData from "./PostsData";

function App() {
  return (
    <main>
      <List title={"Vote for the best pizzas!"} items={PostsData} />
    </main>
  );
}

export default App;
