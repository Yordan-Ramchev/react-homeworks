import React, { useState } from "react";
import Card from "./../Card";

const List = props => {
  const [sectionTitle] = useState(props.title);
  const [items] = useState(props.items);

  return (
    <section className="post-list">
      <div className="container">
        <div className="columns">
          <div className="column">
            <h1 className="title">{sectionTitle}</h1>
          </div>
        </div>
        <div className="columns">
          {items.length !== 0 ? (
            <>
              {items.map(item => (
                <Card
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  tagline={item.tagline}
                  votes={item.votes}
                />
              ))}
            </>
          ) : (
            <div className="column">No Items Defined!</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default List;
