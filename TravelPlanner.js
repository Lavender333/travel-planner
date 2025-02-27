import React, { useState } from 'react';

const TravelPlanner = () => {
  const [tasks, setTasks] = useState({
    timeOffRequested: false,
    petCareBooked: false,
    accommodationBooked: false,
    parkingArranged: false,
    packingCompleted: false,
    snacksPacked: false,
    experiencesPlanned: false
  });

  const toggleTask = (taskName) => {
    setTasks({ ...tasks, [taskName]: !tasks[taskName] });
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>✨ Digital Travel Planner ✨</h1>
      <ul>
        {Object.keys(tasks).map(task => (
          <li key={task}>
            <button onClick={() => toggleTask(task)}>
              {tasks[task] ? '✔' : '❌'} {task.replace(/([A-Z])/g, ' $1')}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TravelPlanner;
