import React, { Component } from "react";
import PostListItem from "./PostListItem";

class PostList extends Component {
  state = {
    sectionTitle: "VOTE for best tagline!"
  };

  render() {
    let posts = this.props.posts;
    return (
      <section className="post-list">
        <div className="container">
          <h1 className="title">{this.state.sectionTitle}</h1>
          <div className="columns">
            {posts.map(post => (
              <div className="column" key={post.id}>
                <PostListItem
                  title={post.title}
                  tagline={post.tagline}
                  votes={post.votes}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default PostList;
