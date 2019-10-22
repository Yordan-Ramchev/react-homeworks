import React, { useState } from "react";
import Card from "../Card/index";

type IItem = {
  id: number;
  title: string;
  tagline: string;
  votes: number;
}

type ITitle = {
  count: string;
}

const List = (props: any) => {
  const [sectionTitle] = useState<ITitle>(props.title);
  const [items] = useState<IItem[]>(props.items);

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
