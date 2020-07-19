import React from "react";

import Modal from "../Modal/Modal";

import "./errorMessage.css";

function ErrorMessage({error, setError}) {
  return (
    <Modal>
      <div className="error-message">
        <span className="error-message__text">{error}</span>
        <button className="error-message__ok" onClick={() => setError("")}>
          OK
        </button>
      </div>
    </Modal>
  );
}

export default ErrorMessage;
