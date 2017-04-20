import React from 'react';

import './Sidebar.css';
import Note from '../Note/Note';

const Sidebar = ({notes, handleClick, removeNote, loadSamples}) => {
  return (
    <aside className="sidebar">
      <h2>Notes</h2>
      <button
        onClick={loadSamples}
      >
        Load samples
      </button>
      <ul className="sidebar__list">
        {
          Object.keys(notes)
          .map(key =>(
            <Note
              key={key}
              index={key}
              details={notes[key]}
              removeNote={removeNote}
            />
          ))
        }
      </ul>
    </aside>
  );
};

export default Sidebar;
