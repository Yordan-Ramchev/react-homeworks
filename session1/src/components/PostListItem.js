import React, { Component } from "react";

class PostListItem extends Component {
  state = {
    isHidden: false,
    isLiked: false,
    votes: this.props.votes
  };

  // hidePost = () => {
  //   this.setState({ isHidden: true });
  // };

  likePost = () => {
    let getVotes = this.state.votes;

    if (!this.state.isLiked) {
      this.setState({ isLiked: true });
      this.setState({ votes: getVotes + 1 });
    } else {
      this.setState({ isLiked: false });
      this.setState({ votes: getVotes - 1 });
    }
  };

  render() {
    return (
      <div className={"card " + (this.state.isHidden ? "hide" : "")}>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{this.props.title}</p>
              <p className="subtitle is-6">{this.props.tagline}</p>
            </div>
          </div>
          <div className="content">
            {this.state.votes === 0 ? (
              <p>Be the first to like this!</p>
            ) : (
              <span>{this.state.votes} Likes</span>
            )}
            <button
              className={
                "button " +
                (this.state.isLiked
                  ? "has-background-danger has-text-white"
                  : "")
              }
              onClick={this.likePost}
            >
              &hearts;
            </button>
            <button className="button" onClick={() =>this.props.hidePost(this.props.id)}>
              Remove
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default PostListItem;
