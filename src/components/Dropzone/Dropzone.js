import React, { useState } from "react";

import Modal from "../Modal/Modal";
import TagFrom from "../TagForm/TagForm";
import ImageArea from "../ImageArea/ImageArea";

import "./dropzone.css";

function Dropzone({getRootProps, selectedTag, isDrag, addTag, setValue, state}) {
  const [isOpenModal, setOpenModal] = useState(false);
  const [coords, setCoords] = useState({ left: null, top: null });

  const { tags, files, value } = state;

  const cancelModal = () => {
    setValue("");
    setOpenModal(false);
  };

  const pushTag = () => {
    addTag(coords.left, coords.top);
    setOpenModal(false);
  };

  const handleClick = e => {
    const rect = e.target.getBoundingClientRect();
    const left = (100 * e.nativeEvent.offsetX) / rect.width;
    const top = (100 * e.nativeEvent.offsetY) / rect.height;

    setOpenModal(true);
    setCoords({ left, top });
  };

  return (
    <React.Fragment>
      {files.length ? 
        <ImageArea
          handleClick={handleClick}
          selectedTag={selectedTag}
          getRootProps={getRootProps}
          isDrag={isDrag}
          tags={tags}
          file={files[0]}
        />
       : 
        <div {...getRootProps({ className: `dropzone ${isDrag}` })}>
          <span>Drag 'n' drop image file here</span>
        </div>
      }

      {isOpenModal && (
        <Modal>
          <TagFrom
            cancelModal={cancelModal}
            pushTag={pushTag}
            value={value}
            setValue={setValue}
          />
        </Modal>
      )}
    </React.Fragment>
  );
}

export default Dropzone;
