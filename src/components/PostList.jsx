import React from "react";
import PostItem from "./PostItem";

function PostList(props) {
  const { posts, deletePost } = props;

  return (
    <div>
      <h2 className="mx-5 px-3 py-3">Post's list :</h2>
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
      ;
    </div>
  );
}

export default PostList;
