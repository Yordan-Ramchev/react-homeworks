import React, { useState, useEffect } from "react";
import POSTS from "./PostsData";
import PostList from "./components/PostList";
import "bulma/css/bulma.css";
import "./App.css";

function App() {
  const [posts, setPosts] = useState(POSTS);

  useEffect(() => {
    setPosts(POSTS);
  }, []);

  return (
    <main>
      <PostList posts={posts} />
    </main>
  );
}

export default App;
