import Style from "./TopicInput.module.css";

//Enables topic to be added to the new notes
export default function TopicInput(props) {
  return (
      <input
        className={Style.TopicInput}
        placeholder="Enter Topic Here..."
        maxLength={50}
        onChange={(e) => props.topicChange(e)}
      />
  );
}
