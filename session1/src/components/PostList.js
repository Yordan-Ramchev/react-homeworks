import React, { Component } from "react";
import PostListItem from "./PostListItem";

class PostList extends Component {
  state = {
    sectionTitle: "VOTE for best tagline!",
    posts: this.props.posts
  };

  hidePost(id) {
    
    console.log(this.state.posts)
    // let updatedPosts = this.state.posts.slice(id, 1);
    
    // this.setState({
    //   posts: updatedPosts
    // });
  }

  render() {
    return (
      <section className="post-list">
        <div className="container">
          <h1 className="title">{this.state.sectionTitle}</h1>
          <div className="columns">
            {this.state.posts.map(post => (
              <div className="column" key={post.id}>
                <PostListItem
                  id={post.id}
                  title={post.title}
                  tagline={post.tagline}
                  votes={post.votes}
                  hidePost={this.hidePost}
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
