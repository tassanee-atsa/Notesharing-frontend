import Style from "./NotesPage.module.css";
import { useLocation } from "react-router-dom";
import Note from "./Note/Note";
import React from "react";

export default function NotesPage(props) {
  const location = useLocation();
  const note = location.state;

  return (
    <div className={Style.NotesPage}>
      <Note
        key={note.id}
        date={note.date}
        topics={note.topics}
        notes={note.notes}
      />
    </div>
  );
}
