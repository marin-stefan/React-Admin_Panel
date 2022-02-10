import React from "react";

function PostItem(props) {
  const { id, title, body, deletePostItem } = props;

  return (
    <div className="bg-warning mx-3 my-2 px-2 py-2 rounded-3 shadow-lg border border-primary">
      <h2 className="mx-4">{title}</h2>
      <br />
      <h6 className="mx-2 py-1">{body}</h6>
      <button
        className="rounded-3 btn btn-primary btn-sm btn-shadow mx-2 border-light"
        onClick={() => deletePostItem(id)}
      >
        Delete Post
      </button>
    </div>
  );
}

export default PostItem;
