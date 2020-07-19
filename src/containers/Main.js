import React from "react";

import EditingMenu from "../components/EditingMenu/EditingMenu";
import ListOfNotes from "../components/ListOfNotes/ListOfNotes";
import Dropzone from "../components/Dropzone/Dropzone";

function Main({getRootProps, state, dispatch, isDrag, actions}) {
  const { addTagAction, selectedTagAction, setValueAction } = actions;
  const { tags, value } = state;

  const setValue = val => dispatch(setValueAction(val));
  const selectedTag = id => dispatch(selectedTagAction(id));

  const addTag = (left, top) => {
    const tag = {
      id: new Date().getTime(),
      text: value,
      coords: {
        left,
        top,
      },
      isSelected: true,
    };
    dispatch(addTagAction(tag));
  };

  return (
    <section className="main">
      <aside className="sidebar">
        <EditingMenu />
        <ListOfNotes tags={tags} selectedTag={selectedTag} />
      </aside>

      <main className="image-area">
        <Dropzone
          getRootProps={getRootProps}
          state={state}
          isDrag={isDrag}
          addTag={addTag}
          setValue={setValue}
          selectedTag={selectedTag}
        />
      </main>
    </section>
  );
}

export default Main;
