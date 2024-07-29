import React, { useState } from "react";
import EditableName from "./EditableName";
import "./ProfilePictureUploader.css";

const ProfilePictureUploader = ({
  initialName,
  onNameChange,
  onProfilePictureChange,
}) => {
  const [profilePicture, setProfilePicture] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleFileSelect = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(selectedFile);
        setPreviewUrl(reader.result);
        onProfilePictureChange(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-picture-container">
        {previewUrl ? (
          <img
            src={previewUrl}
            alt="Profile Preview"
            className="profile-picture"
            onClick={() => document.getElementById("fileInput").click()}
          />
        ) : (
          <div
            className="profile-picture-placeholder"
            onClick={() => document.getElementById("fileInput").click()}
          >
            <span className="plus-sign">+</span>
          </div>
        )}
        <input
          type="file"
          id="fileInput"
          className="file-input"
          onChange={handleFileSelect}
          style={{ display: "none" }}
        />
      </div>
      <EditableName initialName={initialName} onNameChange={onNameChange} />
    </div>
  );
};

export default ProfilePictureUploader;
