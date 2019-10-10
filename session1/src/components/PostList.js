import React, { Component } from "react";
import PostListItem from "./PostListItem";

class PostList extends Component {
  state = {
    sectionTitle: "VOTE for best tagline!",
    posts: this.props.posts
  };

  hidePost = (id) => {
    let postData = this.state.posts;
    postData.splice(id, 1)
    
    this.setState({
      posts: postData
    });
  }

  render() {
    return (
      <section className="post-list">
        <div className="container">
          <h1 className="title">{this.state.sectionTitle}</h1>
          {this.state.posts.length !== 0 ? (
            <div className="columns">
              {this.state.posts.map((post, index) => (
                <div className="column" key={post.id}>
                  <PostListItem
                    id={index}
                    title={post.title}
                    tagline={post.tagline}
                    votes={post.votes}
                    hidePost={this.hidePost}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="columns">
              No Posts!
            </div>
          )}
        </div>
      </section>
    );
  }
}

export default PostList;
