import React, { useState, useEffect } from "react";
import "./NewPost.css";

const NewPost = ({
  onPostSave,
  editingPost,
  onCancelEdit,
  profilePicture,
  userName,
}) => {
  const [postText, setPostText] = useState("");
  const [file, setFile] = useState(null);

  useEffect(() => {
    if (editingPost) {
      setPostText(editingPost.text);
      setFile(editingPost.file);
    } else {
      setPostText("");
      setFile(null);
    }
  }, [editingPost]);

  const handleSave = () => {
    const newPost = {
      id: editingPost ? editingPost.id : Date.now(),
      text: postText,
      date: new Date().toLocaleString(),
      file,
      profilePicture,
      userName,
    };

    onPostSave(newPost);
  };

  return (
    <div className="new-post">
      <h2>{editingPost ? "게시물 수정" : "새 게시물 작성"}</h2>
      <textarea
        placeholder="게시물 내용을 입력하세요."
        value={postText}
        onChange={(e) => setPostText(e.target.value)}
      ></textarea>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleSave}>{editingPost ? "수정" : "게시"}</button>
      {editingPost && <button onClick={onCancelEdit}>취소</button>}
    </div>
  );
};

export default NewPost;
