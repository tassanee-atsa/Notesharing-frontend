import Style from "./NotesInput.module.css";
import { Input } from "antd";
const { TextArea } = Input;

//Enables notes to be added to the database
//Viewable via search by topic
export default function NotesInput(props) {
  return (
      <TextArea
        type="text"
        placeholder="Enter Text Here..."
        className={Style.NotesInput}
        maxLength={1000}
        onChange={(e) => {
          props.textChange(e);
        }}
      />
  );
}
