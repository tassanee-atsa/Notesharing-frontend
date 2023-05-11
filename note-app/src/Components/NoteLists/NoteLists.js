import Style from "./NoteLists.module.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Note from "../ResultsPage/Note/Note";

export default function HomePage() {
  const [data, setData] = useState(undefined);

  useEffect(() => {
    const fetchNotes = async () => {
      let response = await fetch(`https://notesharing-twi4.onrender.com/notes/`);
      let responseJson = await response.json();
      setData(responseJson.data);
    };
    fetchNotes();
  }, [data]);

  let navigate = useNavigate();

  async function newDate(text) {
    let searchedDate = await fetch(
      `https://notesharing-twi4.onrender.com/notes/topics/${text}`
    );
    let searchResults = await searchedDate.json();
    //console.log(searchResults);
    navigate("/NotesPage/", { state: searchResults.payload });
  }

  async function AddNotesButton() {
    navigate("/AddNotesPage/");
  }

  return (
    <div className={Style.NoteLists}>
      <div className={Style.AddNotes} onClick={() => AddNotesButton()}>
        Add Note
      </div>
      {data &&
        data.map((note) => (
          <div>
            <div
              className={Style.SearchResults}
              onClick={() => newDate(note.topics)}
            >
              <Note key={note.id} date={note.date} topics={note.topics}></Note>
            </div>
          </div>
        ))}
    </div>
  );
}
