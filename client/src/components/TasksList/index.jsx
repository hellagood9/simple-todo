import React from 'react';
import PropTypes from 'prop-types';

const STATUS_MACHINE = {
  'Pending': 'Done',
  'Done': 'Pending'
}

export default function TasksList(props) {
  const {
    tasks, status, onItemClick, onItemChecked,
  } = props;

  return (
    <div>
      <h2>
        { status === 'Pending' ? 'Pending Tasks' : 'Done Tasks'}
        {tasks.filter((task) => task.status === status).length}
      </h2>
      {tasks
        .filter((task) => task.status === status)
        .map((task) => (
          <div key={task._id}>
            <input
              type="checkbox"
              name={task.name}
              value={task.name}
              onChange={() => onItemChecked({ 
                _id: task._id, 
                status: STATUS_MACHINE[task.status] 
              })}
            />
            <label htmlFor={task.name}>{task.name}</label>
            {task.category}
            <button type="submit" onClick={() => onItemClick(task._id)}>x</button>
          </div>
        ))}
    </div>
  );
}

TasksList.propTypes = {
  tasks: PropTypes.array,
};
