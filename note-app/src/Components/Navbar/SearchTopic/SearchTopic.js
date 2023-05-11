import React from "react";
import Style from "./SearchTopic.module.css";

//This is the search bar for search by topic
export default function SearchBar(props) {
  return (
    <div className={Style.SearchTopic}>
      <form className={Style.SearchTopic}>
        <input 
          type="text"
          placeholder="Topic"
          onChange={(e) => props.handleChange(e)}
          value={props.text}
        />
        <button className={Style.Button} onClick={props.getAllTopics}>
          Search
        </button>
      </form>
    </div>
  );
}
