import React, { Component } from "react";

const CardOnSteroids = OriginalCard => {
  class BoostedCard extends Component {
    state = {
      votes: this.props.votes,
      isHidden: false,
      isLiked: false
    };

    hideItem = () => {
      this.setState(prevState => {
        return {
          votes: prevState.votes,
          isHidden: true,
          isLiked: prevState.isLiked
        };
      });
    };

    likeItem = () => {
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
        <OriginalCard 
          title={this.props.title}
          tagline={this.props.tagline}
          votes={this.state.votes} 
          isHidden={this.state.isHidden} 
          isLiked={this.state.isLiked}
          likeItem={this.likeItem}
          hideItem={this.hideItem}
        />
      );
    }
  }
  return BoostedCard;
};

export default CardOnSteroids;
