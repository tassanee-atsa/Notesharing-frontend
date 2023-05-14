import React from "react";
import Style from "./SearchTopic.module.css";
import { AiOutlineSearch } from "react-icons/ai";

//This is the search bar for search by topic
export default function SearchBar(props) {
  return (
    <form className={Style.SearchTopic} onSubmit={props.getSearchedTopics}>
      <div className={Style.SearchInput}>
        <input
          type="text"
          className={Style.Input}
          placeholder="Topic"
          onChange={(e) => props.handleChange(e)}
          value={props.text}
        />
        <AiOutlineSearch size={'22px'} onClick={props.getSearchedTopics} className={Style.SearchAction}/>
      </div>
    </form>
  );
}
