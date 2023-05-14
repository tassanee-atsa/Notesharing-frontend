import Style from "./Note.module.css";

export default function Note(props) {
  return (
    <div className={Style.Note}>
      <h2>{props.topics}</h2>
      <p>{props.date}</p>
      <p>{props.notes}</p>
    </div>
  );
}
