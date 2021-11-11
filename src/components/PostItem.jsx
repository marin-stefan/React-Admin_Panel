import React from "react";

function PostItem(props) {
  const { id, title, body, deletePostItem } = props;

  return (
    <div className="bg-warning mx-3 my-2 px-2 py-2 rounded-3 shadow-lg border border-primary">
      <h2>{title}</h2>
      <br />
      <p>{body}</p>
      <button
        className="rounded-3 btn btn-primary btn-sm btn-shadow"
        onClick={() => deletePostItem(id)}
      >
        Delete Post
      </button>
    </div>
  );
}

export default PostItem;
