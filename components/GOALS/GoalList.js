import React from "react";
import "./GoalList.css";

const GoalList = ({ goals, onEdit, onDelete }) => {
  const isExpired = (endDate) => {
    const today = new Date();
    const goalEndDate = new Date(endDate);
    return goalEndDate < today;
  };

  return (
    <div className="goal-list">
      {goals.length === 0 ? (
        <div className="no-goals">등록된 목표가 없습니다.</div>
      ) : (
        goals.map((goal) => (
          <div key={goal.id} className="goal-item">
            <div className="goal-date">
              <span className={isExpired(goal.endDate) ? "expired" : ""}>
                {goal.startDate} ~ {goal.endDate}
              </span>
            </div>
            <div
              className={`goal-content ${
                isExpired(goal.endDate) ? "expired" : ""
              }`}
            >
              <span>{goal.text}</span>
              <input
                type="checkbox"
                className="goal-checkbox"
                checked={goal.completed}
              />
            </div>
            <div className="goal-actions">
              <button onClick={() => onEdit(goal)}>수정</button>
              <button onClick={() => onDelete(goal.id)}>삭제</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default GoalList;
