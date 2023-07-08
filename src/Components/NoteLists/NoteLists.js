import Style from "./NoteLists.module.css";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NotePreview from "./NotePreview/NotePreview";

export default function HomePage() {
  const [data, setData] = useState(undefined);
  const location = useLocation();
  const stateData = location.state;

  useEffect(() => {
    const fetchNotes = async () => {
      let response = await fetch(`https://notesharing-backend.vercel.app/notes`);
      let responseJson = await response.json();
      setData(responseJson.data);
    };
    stateData ? setData(stateData) : fetchNotes();
  }, [stateData]);

  let navigate = useNavigate();

  function redirectToNote(note) {
    navigate("/NotesPage/", { state: note });
  }

  return (
    <ul className={Style.NoteLists}>
      {data &&
        data.map((note) => (
          <NotePreview
            key={note.id}
            date={note.date}
            topics={note.topics}
            handleClick={() => {
              redirectToNote(note);
            }}
          />
        ))}
    </ul>
  );
}
