import Style from './NotesPage.module.css'
import React from 'react'
import AddNoteForm from './AddNoteForm/AddNoteForm'


//This displays the existing notes and allows new notes to be added
export default function NotesPage(props) {
  return (
    <div className={Style.AddNoteForm}>
      <AddNoteForm></AddNoteForm>
    </div>
  )
}
