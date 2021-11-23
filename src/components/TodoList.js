import React from 'react';

export function TodoList ({ lists }) {
  return (
    <div>
      <ul>
        {
          lists.map((object) => (
            <li> {object.task} </li>
          ))
        }
      </ul>
    </div>
  )
};
