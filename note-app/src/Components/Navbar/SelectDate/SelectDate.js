import { AiOutlineSearch } from "react-icons/ai";
import Style from "./SelectDate.module.css";

//Search bar to search existing notes by date
const SelectDate = (props) => {
  return (
    <form className={Style.SelectDate} onSubmit={props.getDate}>
      <div className={Style.SearchInput}>
        <input
          type="text"
          className={Style.Input}
          placeholder="DD-MM-YYYY"
          onChange={(e) => props.handleChange(e)}
          value={props.text}
        />
        <AiOutlineSearch
          size={"22px"}
          onClick={props.getDate}
          className={Style.SearchAction}
        />
      </div>
    </form>
  );
};
export default SelectDate;
