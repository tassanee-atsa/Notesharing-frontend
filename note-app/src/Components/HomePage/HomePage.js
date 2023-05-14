import SubTitle from "./SubTitle/SubTitle";
import Style from "./HomePage.module.css";
import { useNavigate } from "react-router-dom";
import { AiOutlinePlus, AiOutlineUnorderedList } from "react-icons/ai";

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
      <div className={Style.Actions}>
        <div className={Style.AddNotes} onClick={() => AddNotesButton()}>
          <AiOutlinePlus size={"24px"} />
          Add Note
        </div>
        <div className={Style.AddNotes} onClick={() => NoteListsButton()}>
          <AiOutlineUnorderedList size={"24px"} />
          Note Lists
        </div>
      </div>
    </div>
  );
}
