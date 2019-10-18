import React, { Component } from "react";
import CardOnSteroids from "./../HoC";

class Card extends Component {
  state = {
    votes: this.props.votes,
    isHidden: false,
    isLiked: false
  };
  render() {
    return (
      <div className={"column " + (this.state.isHidden ? "hide" : "")}>
        <div className="card">
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
                // onClick={() => likePost()}
              >
                &hearts;
              </button>
              <button
                className="button"
                //  onClick={() => hideItem()}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardOnSteroids(Card);
