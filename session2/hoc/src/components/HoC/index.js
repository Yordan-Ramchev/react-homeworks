import React, { Component } from "react";

const CardOnSteroids = OriginalCard => {
  class BoostedCard extends Component {
    constructor(props) {
      super(props);

      this.state = {
        votes: this.props.votes,
        isHidden: false,
        isLiked: false
      };
    }

    hideItem = () => {
      this.setState(prevState => {
        return {
          votes: prevState.votes,
          isHidden: true,
          isLiked: prevState.isLiked
        };
      });
    };

    like = () => {
      console.log("test");

      if (!this.state.isLiked) {
        this.setState(prevState => {
          return {
            votes: prevState.votes + 1,
            isHidden: false,
            isLiked: true
          };
        });
      } else {
        this.setState(prevState => {
          return {
            votes: prevState.votes - 1,
            isHidden: false,
            isLiked: false
          };
        });
      }
    };

    render() {
      return (
        <OriginalCard>
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
              onClick={() => this.like()}
            >
              &hearts;
            </button>
            <button className="button" onClick={() => this.hideItem()}>
              Remove
            </button>
          </div>
        </OriginalCard>
      );
    }
  }
  return BoostedCard;
};

export default CardOnSteroids;
