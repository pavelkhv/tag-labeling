import { ADD_TAG, SELECTED_TAG, SET_VALUE, SET_FILES } from "./actions";

export const initialState = {
  files: [],
  tags: [],
  value: "",
}

export const reducer = (state = initialState, action) => {
  let tags = [...state.tags];

  switch(action.type) {
    case ADD_TAG:
      tags.forEach(tag => tag.isSelected = false);
      tags.push(action.tag);
      return {...state, tags, value: ""};
    case SELECTED_TAG:
      tags.forEach(tag => {
        if(tag.id == action.id) tag.isSelected = true
        else tag.isSelected = false
      });
      return {...state, tags}
    case SET_VALUE:
      return {...state, value: action.value}
    case SET_FILES:
      return {...state, files: action.files, tags: []}
    default:
      return state;
  }
}