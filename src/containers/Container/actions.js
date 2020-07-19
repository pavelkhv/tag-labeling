export const ADD_TAG = "ADD_TAG";
export const SELECTED_TAG = "SELECTED_TAG";
export const SET_VALUE = "SET_VALUE";
export const SET_FILES = "SET_FILES";

export const addTagAction = tag => ({
  type: ADD_TAG,
  tag
});

export const selectedTagAction = id => ({
  type: SELECTED_TAG,
  id
});

export const setValueAction = value => ({
  type: SET_VALUE,
  value
});

export const setFilesAction = files => ({
  type: SET_FILES,
  files
});