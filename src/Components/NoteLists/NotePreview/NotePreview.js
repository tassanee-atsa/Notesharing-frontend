import Style from "./NotePreview.module.css";
import { FaChevronRight } from "react-icons/fa";

export default function NotePreview(props) {
  return (
    <li className={Style.NotePreview} onClick={props.handleClick}>
      <div className={Style.NoteText}>
        <p className={Style.Date}>{props.date}</p>
        <h2>{props.topics}</h2>
      </div>
      <FaChevronRight size={"18px"} className={Style.Arrow} />
    </li>
  );
}
