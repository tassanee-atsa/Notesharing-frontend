import Style from "./DateInput.module.css";

//Enables date to be added to new notes
export default function DateInput(props) {
  return (
      <input
        className={Style.DateInput}
        placeholder="(DD-MM-YYY)..."
        maxLength={50}
        onChange={(e) => props.dateChange(e)}
      />
  );
}
