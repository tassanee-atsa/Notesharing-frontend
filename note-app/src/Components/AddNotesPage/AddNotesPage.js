import Style from './AddNotesPage.module.css'
import React from 'react'
import AddNoteForm from '../AddNoteForm/AddNoteForm'

export default function NotesPage() {
  return (
    <div className={Style.AddNoteForm}>
      <AddNoteForm />
    </div>
  )
}
