import React from "react";
import "./PostList.css";
import PostItem from "./PostItem";

function PostList(props) {
  const { posts, deletePost } = props;

  return (
    <div className="post-list">
      <h2>Lista postari:</h2>
      {posts.map((post, index) => {
        return (
          <PostItem
            deletePostItem={(id) => deletePost(id)}
            title={post.title}
            body={post.body}
            id={post.id}
            key={index}
          />
        );
      })}
    </div>
  );
}

export default PostList;
