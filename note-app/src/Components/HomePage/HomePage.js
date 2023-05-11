import SubTitle from "./SubTitle/SubTitle";
import Style from "./HomePage.module.css";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  let navigate = useNavigate();

  async function AddNotesButton() {
    navigate("/AddNotesPage/");
  }

  async function NoteListsButton() {
    navigate("/NoteLists/");
  }

  return (
    <div className={Style.HomePage}>
      <SubTitle />
      <div className={Style.AddNotes} onClick={() => AddNotesButton()}>
        Add Note
      </div>
      <div className={Style.AddNotes} onClick={() => NoteListsButton()}>
        Note Lists
      </div>
    </div>
  );
}
