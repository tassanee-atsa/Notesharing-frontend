import Note from "./Note/Note";
import { useLocation, useNavigate } from "react-router-dom";
import Style from "./ResultsPage.module.css";

//This displays the search results for existing notes, when searched by topic
export default function ResultsPage() {
  const location = useLocation();
  const data = location.state;
  let navigate = useNavigate();
  //console.log("state");
  //console.log(data);

  async function newDate(text) {
    let searchedDate = await fetch(
      `https://notesharing-twi4.onrender.com/notes/topics/${text}`
    );
    let searchResults = await searchedDate.json();
    //console.log(searchResults);
    navigate("/NotesPage/", { state: searchResults.payload });
  }

  return (
    <div className={Style.ResultsPage}>
      {data &&
        data.map((note) => (
          <nav>
            <div
              className={Style.SearchResults}
              onClick={() => newDate(note.topics)}
            >
              <Note key={note.id} date={note.date} topics={note.topics}></Note>
            </div>
          </nav>
        ))}
      ;
    </div>
  );
}
