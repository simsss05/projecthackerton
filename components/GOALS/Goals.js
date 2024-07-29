import React, { useState } from "react";
import ProfilePictureUploader from "../ProfilePictureUploader";
import GoalInput from "./GoalInput";
import GoalList from "./GoalList";
import "./Goals.css";

const Goals = ({ onNameChange, onProfilePictureChange }) => {
  const [name, setName] = useState("Your Name");
  const [profilePicture, setProfilePicture] = useState(null);
  const [goals, setGoals] = useState([]);
  const [editingGoal, setEditingGoal] = useState(null);
  const [mainGoal, setMainGoal] = useState(null);

  const handleGoalSave = (goal) => {
    if (goal.isImportant) {
      setMainGoal(goal);
    } else {
      if (editingGoal) {
        setGoals((prevGoals) =>
          prevGoals.map((g) => (g.id === goal.id ? goal : g))
        );
        setEditingGoal(null);
      } else {
        setGoals((prevGoals) => [goal, ...prevGoals]);
      }
    }
  };

  const handleEditGoal = (goal) => {
    setEditingGoal(goal);
  };

  const handleDeleteGoal = (goalId) => {
    if (mainGoal && mainGoal.id === goalId) {
      setMainGoal(null);
    } else {
      setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== goalId));
    }
  };

  const handleNameChange = (newName) => {
    setName(newName);
    if (onNameChange) {
      onNameChange(newName);
    }
  };

  const handleProfilePictureChange = (newProfilePicture) => {
    setProfilePicture(newProfilePicture);
    if (onProfilePictureChange) {
      onProfilePictureChange(newProfilePicture);
    }
  };

  return (
    <div className="goals-section">
      <div className="profile-and-goal">
        <div className="profile-info">
          <ProfilePictureUploader
            initialName={name}
            onNameChange={handleNameChange}
            profilePicture={profilePicture}
            onProfilePictureChange={handleProfilePictureChange}
          />
          <div className="important-goal">
            <h3>MAIN-GOAL:</h3>
            {mainGoal ? (
              <>
                <div className="goal-date">
                  {mainGoal.startDate} ~ {mainGoal.endDate}
                </div>
                <div>{mainGoal.text}</div>
              </>
            ) : (
              <div className="no-main-goal">No MAIN-GOAL set</div>
            )}
          </div>
        </div>
        <GoalInput
          onGoalSave={handleGoalSave}
          editingGoal={editingGoal}
          mainGoal={mainGoal}
        />
      </div>

      <GoalList
        goals={goals}
        onEdit={handleEditGoal}
        onDelete={handleDeleteGoal}
      />
    </div>
  );
};

export default Goals;
