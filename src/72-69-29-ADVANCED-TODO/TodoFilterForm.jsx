import React from 'react';

const TodoFilterForm = ({
  name,
  setName,
  hideCompletedFilter,
  setHideCompletedFilter,
}) => {
  return (
    <div className="filter-form">
      <div className="filter-form-group">
        <label htmlFor="name">Filter by Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="filter-form-group">
        <label htmlFor="hideCompleted">Hide Completed</label>
        <input
          type="checkbox"
          id="hideCompleted"
          checked={hideCompletedFilter}
          onChange={(e) => setHideCompletedFilter(e.target.checked)}
        />
      </div>
    </div>
  );
};

export default TodoFilterForm;
