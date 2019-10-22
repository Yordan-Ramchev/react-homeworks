import React, { useState } from "react";

type ICard = {
  id: number;
  title: string;
  tagline: string;
  votes: number;
}

const Card = ({ id, title, tagline, votes }: ICard) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [cardVotes, setCardVotes] = useState(votes);

  const hideItem = () => {
    setIsHidden(true);
  };

  const likePost = () => {
    if (!isLiked) {
      setIsLiked(true);
      setCardVotes(cardVotes + 1);
    } else {
      setIsLiked(false);
      setCardVotes(cardVotes - 1);
    }
  };

  return (
    <div className={"column " + (isHidden ? "hide" : "")}>
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{title}</p>
              <p className="subtitle is-6">{tagline}</p>
            </div>
          </div>
          <div className="content">
            {cardVotes === 0 ? (
              <p>Be the first to like this!</p>
            ) : (
              <span>{cardVotes} Likes</span>
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
