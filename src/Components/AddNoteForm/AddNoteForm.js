import AddNotesButton from "./AddNotesButton/AddNotesButton";
import NotesInput from "./NotesInput/NotesInput";
import { useState } from "react";
import TopicInput from "./TopicInput/TopicInput";
import DateInput from "./DateInput/DateInput";
import Style from "./AddNoteForm.module.css";

//Enables notes to be posted to the database
export default function AddNoteForm() {
  const [text, setText] = useState("");
  const [topic, setTopic] = useState("");
  const [date, setDate] = useState("");

  const postNote = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ topics: topic, notes: text, date: date }),
    };
    await fetch(`https://notesharing-twi4.onrender.com/notes/`, requestOptions);
  };

  function textChange(e) {
    let newText = e.target.value;
    setText(newText);
    console.log(text);
  }

  function topicChange(e) {
    let newTopic = e.target.value;
    setTopic(newTopic);
    console.log(topic);
  }

  function dateChange(e) {
    let newDate = e.target.value;
    setDate(newDate);
    console.log(topic);
  }

  //This is displaying the components to add new notes
  return (
    <div className={Style.AddNoteContainer}>
      <div className={Style.AddNoteForm}>
        <h2>Add Note</h2>
        <TopicInput topicChange={topicChange} />
        <DateInput dateChange={dateChange} />
        <NotesInput textChange={textChange} />
        <AddNotesButton postNote={postNote} />
      </div>
    </div>
  );
}
