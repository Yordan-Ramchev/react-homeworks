import React, {useState} from "react";
// import Card from "./../Card";

export default function PostList(props) {
  const [sectionTitle, setSectionTitle] = useState(props.title);
  const [items, setItems] = useState(props.items);
  
//   state = {
//     sectionTitle: "VOTE for best tagline!",
//     posts: this.props.posts
//   };

//   hidePost = (id) => {
//     let postData = this.state.posts;
//     postData.splice(id, 1)
    
//     this.setState({
//       posts: postData
//     });
//   }
  return (
    <section className="post-list">
      <div className="container">
        <h1 className="title">{sectionTitle}</h1>
        { items.length !== 0 ? (
          <div className="columns">
            { items.map((post) => (
              <div className="column" key={post.id}>
              
              </div>
            ))}
          </div>
        ) : (
          <div className="columns">
            No Items Defined!
          </div>
        )}
      </div> 
    </section>
  )
//   render() {
//     return (
//       <section className="post-list">
//         <div className="container">
//           <h1 className="title">{this.state.sectionTitle}</h1>
//           {posts.length !== 0 ? (
//             <div className="columns">
//               {this.state.posts.map((post, index) => (
//                 <div className="column" key={post.id}>
//                   <PostListItem
//                     id={index}
//                     title={post.title}
//                     tagline={post.tagline}
//                     votes={post.votes}
//                     hidePost={this.hidePost}
//                   />
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <div className="columns">
//               No Posts!
//             </div>
//           )}
//         </div>
//       </section>
//     );
//   }
}
