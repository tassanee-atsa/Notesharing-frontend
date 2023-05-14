import Style from "./AddNotesButton.module.css";

export default function AddNotesButton(props) {
  // This adds new notes to the database, viewable via search by topic
  return (
    <form onSubmit={props.postNote}>
      <button
        className={Style.AddNotesButton}
        value="submit"
      >
      Submit
      </button>
    </form>
  );
}
