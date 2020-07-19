import React from "react";

import "./editingMenu.css";

function EditingMenu() {
  return (
    <div className="editing-menu">
      <h2 className="editing-menu__title">Edit Element</h2>

      <ul className="editing-list">
        <li className="editing-list__item editing-list__item_green">Read</li>
        <li className="editing-list__item editing-list__item_blue">Edit</li>
        <li className="editing-list__item editing-list__item_red">Delete</li>
      </ul>
    </div>
  );
}

export default EditingMenu;
