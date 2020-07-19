import React, { useMemo } from "react";

import "./imageArea.css";

function ImageArea({getRootProps, file, handleClick, selectedTag, tags, isDrag}) {
  const clickedTag = (e, id) => {
    e.stopPropagation();
    selectedTag(id);
  };

  const tagsList = useMemo(() =>
    tags.map(({ id, coords, isSelected }) => (
      <span
        key={id}
        onClick={e => clickedTag(e, id)}
        className={`tag ${isSelected ? "tag_active" : ""}`}
        style={{ left: `${coords.left}%`, top: `${coords.top}%` }}
      ></span>
    )),
    [tags]
  );

  return (
    <div
      {...getRootProps()}
      onClick={handleClick}
      className={`img-wrap ${isDrag}`}
      key={file.name}
    >
      <img className="img" src={file.preview} />
      {tagsList}
    </div>
  );
}

export default ImageArea;
