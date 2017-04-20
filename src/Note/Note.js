import React from 'react';

const Note = ({index, details, handleClick, removeNote}) => (
  <li className="sidebar__item">
    <button
      className="sidebar__btn"
      onClick={handleClick}
    >
      {details.title}
    </button>
    <button
      className="sidebar__btn sidebar__btn--delete"
      onClick={() => removeNote(index)}
    >
      &times;
    </button>
  </li>
);

export default Note;
