import React, { Component } from "react";
import CardOnSteroids from "./../HoC";

class Card extends Component {
  render() {
    const likeItem = this.props.likeItem;
    const hideItem = this.props.hideItem;

    return (
      <div className={"column " + (this.props.isHidden ? "hide" : "")}>
        <div className="card">
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4">{this.props.title}</p>
                <p className="subtitle is-6">{this.props.tagline}</p>
              </div>
            </div>
            <div className="content">
              {this.props.votes === 0 ? (
                <p>Be the first to like this!</p>
              ) : (
                <span>{this.props.votes} Likes</span>
              )}
              <button
                className={
                  "button " +
                  (this.props.isLiked
                    ? "has-background-danger has-text-white"
                    : "")
                }
                onClick={likeItem}
              >
                &hearts;
              </button>
              <button
                className="button"
                onClick={hideItem}
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
