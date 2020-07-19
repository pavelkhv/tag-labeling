import React, { useRef, useEffect } from "react";

import "./tagForm.css";

function TagForm({cancelModal, pushTag, value, setValue}) {
  const inputEl = useRef(null);
  const formRef = useRef(null);

  // Close the modal window when clicking outside
  const handleClickOutside = e => {
    if (formRef && !formRef.current.contains(e.target)) {
      cancelModal();
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, []);

  useEffect(() => {
    inputEl.current.focus();
  }, []);

  return (
    <div className="tag-form" ref={formRef}>
      <h2 className="tag-form__title">Note</h2>

      <textarea
        ref={inputEl}
        className="tag-form__text-area"
        value={value}
        onChange={e => setValue(e.target.value)}
      ></textarea>

      <div className="tag-form__buttons">
        <button className="tag-form__ok" onClick={pushTag} disabled={!value}>
          OK
        </button>
        <button className="tag-form__cancel" onClick={cancelModal}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default TagForm;
