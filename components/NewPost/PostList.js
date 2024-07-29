import React from "react";
import "./PostList.css";

const PostList = ({ posts, onEdit, onDelete }) => {
  return (
    <div className="post-list">
      {posts.length === 0 && <p>등록된 게시물이 없습니다.</p>}
      {posts.map((post) => (
        <div key={post.id} className="post-item">
          <div className="post-header">
            <div className="post-user">
              <img
                src={post.profilePicture || "/path/to/default/avatar.jpg"}
                alt="User"
                className="user-avatar"
              />
              <span className="user-name">{post.userName || "User Name"}</span>
            </div>
            <div className="post-actions">
              <button onClick={() => onEdit(post)}>Edit</button>
              <button onClick={() => onDelete(post.id)}>Delete</button>
            </div>
          </div>
          {post.file && (
            <img
              src={URL.createObjectURL(post.file)}
              alt="Post"
              className="post-image"
            />
          )}
          <p className="post-date">{post.date}</p>
          <p className="post-text">{post.text}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;
