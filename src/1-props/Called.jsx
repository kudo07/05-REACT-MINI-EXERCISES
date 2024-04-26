import React from 'react';
import TodoListItem from './TodoListItem';

const Called = () => {
  return (
    <div>
      <TodoListItem isCompleted={true}>
        <span>check if the isCOmpleted is true comping from parent</span>
      </TodoListItem>
    </div>
  );
};

export default Called;
