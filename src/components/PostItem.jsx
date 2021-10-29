import React from "react";
import "./PostItem.css";

function PostItem(props) {
  const { id, title, body, deletePostItem } = props;
  console.log(id);

  return (
    <div className="post-item">
      <h2>{title}</h2>
      <br />
      <p>{body}</p>
      <button onClick={() => deletePostItem(id)}>Delete Post</button>
    </div>
  );
}

export default PostItem;
