import React, { useState } from "react";

const Card = props => {
  const [isLiked, setIsLiked] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [votes, setVotes] = useState(props.votes);

  const hideItem = () => {
    setIsHidden(true);
  };

  const likePost = () => {
    if (!isLiked) {
      setIsLiked(true);
      setVotes(votes + 1);
    } else {
      setIsLiked(false);
      setVotes(votes - 1);
    }
  };

  return (
    <div className={"column " + (isHidden ? "hide" : "")}>
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{props.title}</p>
              <p className="subtitle is-6">{props.tagline}</p>
            </div>
          </div>
          <div className="content">
            {votes === 0 ? (
              <p>Be the first to like this!</p>
            ) : (
              <span>{votes} Likes</span>
            )}
            <button
              className={
                "button " +
                (isLiked ? "has-background-danger has-text-white" : "")
              }
              onClick={() => likePost()}
            >
              &hearts;
            </button>
            <button className="button" onClick={() => hideItem()}>
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
