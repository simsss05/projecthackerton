import React, { useState } from "react";
import "./EditableName.css";

const EditableName = ({ initialName, onNameChange }) => {
  const [name, setName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    onNameChange(name);
    setIsEditing(false);
  };

  return (
    <div className="editable-name">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button onClick={handleSave}>저장</button>
        </div>
      ) : (
        <h2 onClick={() => setIsEditing(true)}>{name}</h2>
      )}
    </div>
  );
};

export default EditableName;
