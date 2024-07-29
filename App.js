import React, { useState } from "react";
import Header from "./components/HEADER/Header";
import NewPost from "./components/NewPost/NewPost";
import PostList from "./components/NewPost/PostList";
import Goals from "./components/GOALS/Goals";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null);
  const [name, setName] = useState("Your Name");
  const [goal, setGoal] = useState("Your goal goes here...");
  const [profilePicture, setProfilePicture] = useState(null);

  const handlePostSave = (post) => {
    if (editingPost) {
      setPosts((prevPosts) =>
        prevPosts.map((p) => (p.id === post.id ? post : p))
      );
      setEditingPost(null);
    } else {
      setPosts((prevPosts) => [post, ...prevPosts]);
    }
  };

  const handleEditPost = (post) => {
    setEditingPost(post);
  };

  const handleDeletePost = (postId) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
  };

  const handleNameChange = (newName) => {
    setName(newName);
  };

  const handleProfilePictureChange = (newProfilePicture) => {
    setProfilePicture(newProfilePicture);
  };

  return (
    <div className="App">
      <Header />
      <div className="main-section">
        <Goals
          onNameChange={handleNameChange}
          onProfilePictureChange={handleProfilePictureChange}
        />
        <NewPost
          onPostSave={handlePostSave}
          editingPost={editingPost}
          onCancelEdit={() => setEditingPost(null)}
          profilePicture={profilePicture}
          userName={name}
        />
        <PostList
          posts={posts}
          onEdit={handleEditPost}
          onDelete={handleDeletePost}
        />
      </div>
    </div>
  );
}

export default App;
