import React, { useMemo } from "react";

import "./listOfNotes.css";

function ListOfNotes({tags, selectedTag}) {
  const notes = useMemo(() =>
    tags.map(tag => {
      const { id, text, isSelected } = tag;
      const activeClass = isSelected ? "list-notes__item_active" : "";

      return (
        <li
          onClick={() => selectedTag(id)}
          className={`list-notes__item ${activeClass}`}
          key={id}
        >
          {text}
        </li>
      );
    }),
    [tags]
  );

  return (
    <div className="notes">
      <h2 className="notes__title">Notes</h2>

      <ul className="filter-notes">
        <li className="filter-notes__item">All</li>
        <li className="filter-notes__item filter-notes__item_active">Latest</li>
      </ul>

      <ul className="list-notes">{notes}</ul>
    </div>
  );
}

export default ListOfNotes;
