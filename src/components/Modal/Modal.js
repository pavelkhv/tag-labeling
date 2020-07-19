import React from "react";
import { createPortal } from "react-dom";

import "./modal.css";

const modalRoot = document.getElementById("root");

function Modal({children}) {
  return createPortal(
    <div className="modal">
      {children}
    </div>, 
    modalRoot
  );
}

export default Modal;
