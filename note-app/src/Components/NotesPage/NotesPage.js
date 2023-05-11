import Style from "./NotesPage.module.css";
import { useLocation } from "react-router-dom";
import Note from "../ResultsPage/Note/Note.js";
import React from "react";
import AddNoteForm from "./AddNoteForm/AddNoteForm";

export default function NotesPage(props) {
  const location = useLocation();
  const data = location.state;

  return (
    <div className={Style.NotesPage}>
     
      {data &&
        data.map((note) => (
          <div>
            <div className={Style.NoteDisplay}>
              <Note
                key={note.id}
                date={note.date}
                topics={note.topics}
                notes={note.notes}
              ></Note>
              
            </div>
            <AddNoteForm />
          </div>
        ))}
    </div>
  );
}
