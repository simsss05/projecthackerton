import React, { useState, useEffect } from "react";
import "./GoalInput.css";

const GoalInput = ({ onGoalSave, editingGoal, mainGoal }) => {
  const [goalText, setGoalText] = useState(editingGoal ? editingGoal.text : "");
  const [startDate, setStartDate] = useState(
    editingGoal ? editingGoal.startDate : ""
  );
  const [endDate, setEndDate] = useState(
    editingGoal ? editingGoal.endDate : ""
  );
  const [isImportant, setIsImportant] = useState(
    editingGoal ? editingGoal.isImportant : false
  );
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (editingGoal) {
      setGoalText(editingGoal.text);
      setStartDate(editingGoal.startDate);
      setEndDate(editingGoal.endDate);
      setIsImportant(editingGoal.isImportant);
    }
  }, [editingGoal]);

  const handleSave = () => {
    if (!goalText || !startDate || !endDate) {
      setErrorMessage("모든 필드를 입력해 주세요.");
      return;
    }

    const newGoal = {
      id: editingGoal ? editingGoal.id : Date.now(),
      text: goalText,
      startDate,
      endDate,
      isImportant,
    };
    onGoalSave(newGoal);
    setGoalText("");
    setStartDate("");
    setEndDate("");
    setIsImportant(false);
    setErrorMessage("");
  };

  return (
    <div className="goal-input">
      <h2>목표 작성</h2>
      <div className="date-inputs">
        <input
          type="date"
          placeholder="시작일"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <input
          type="date"
          placeholder="종료일"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>
      <input
        type="text"
        placeholder="목표를 입력하세요"
        value={goalText}
        onChange={(e) => setGoalText(e.target.value)}
      />
      <div className="important-checkbox">
        <label>
          <input
            type="checkbox"
            checked={isImportant}
            onChange={(e) => setIsImportant(e.target.checked)}
            disabled={mainGoal && !editingGoal}
          />
          MAIN-GOAL
        </label>
      </div>
      <button onClick={handleSave}>목표 저장</button>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </div>
  );
};

export default GoalInput;
