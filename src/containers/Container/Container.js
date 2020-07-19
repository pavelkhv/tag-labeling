import React, { useReducer, useState } from "react";
import { useDropzone } from "react-dropzone";

import { reducer, initialState } from "./reducer";
import * as actions from "./actions";

import Header from "../../components/Header/Header";
import Main from "../Main";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

function Container() {
  const [error, setError] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);
  const setFiles = files => dispatch(actions.setFilesAction(files));

  // Dropzone settings
  const {getRootProps, getInputProps, open, isDragAccept, isDragReject} = 
    useDropzone({
      accept: "image/*",
      noClick: true,
      multiple: false,
      onDrop: (acceptedFiles) => {
        setFiles(acceptedFiles.map(file => ({
          ...file, 
          preview: URL.createObjectURL(file)
        })));
      },
      onDropRejected: () => {
        setError("An error occurred. Only images can be uploaded.")
      }
    });

  // State of the drag n drop window
  const isDrag = isDragReject ? "reject" : isDragAccept ? "accept" : "";

  return (
    <div className="container">
      <Header getInputProps={getInputProps} open={open} />
      <Main
        getRootProps={getRootProps}
        dispatch={dispatch}
        state={state}
        isDrag={isDrag}
        actions={actions}
      />

      {error && <ErrorMessage error={error} setError={setError} />}
    </div>
  );
}

export default Container;
