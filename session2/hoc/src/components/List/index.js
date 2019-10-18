import React, { Component } from "react";
import Card from "./../Card";

class List extends Component {
  state = {
    sectionTitle: this.props.sectionTitle,
    items: this.props.items
  };

  render() {
    return (
      <section className="post-list">
        <div className="container">
          <div className="columns">
            <div className="column">
              <h1 className="title">{this.state.sectionTitle}</h1>
            </div>
          </div>
          <div className="columns">
            {this.state.items.length !== 0 ? (
              <>
                {this.state.items.map(item => (
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
  }
}

export default List;
