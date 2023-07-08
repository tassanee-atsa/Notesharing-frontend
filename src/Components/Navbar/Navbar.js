import Title from "./Title/Title";
import SearchBar from "./SearchTopic/SearchTopic";
import SelectDate from "./SelectDate/SelectDate";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Style from "./Navbar.module.css";

//This displays the sidebar components
export default function Sidebar() {
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  let navigate = useNavigate();

  function handleChangeTopic(event) {
    setText(event.target.value);
    console.log(text);
  }

  function handleChangeDate(event) {
    setDate(event.target.value);
    console.log(text);
  }

  async function getSearchedTopics(e) {
    e.preventDefault();
    let searchedTopics = await fetch(
      `https://notesharing-backend.vercel.app/notes/topics/${text}`
    );
    let searchResults = await searchedTopics.json();
    console.log(searchResults);
    navigate("/NoteLists/", { state: searchResults.payload });
    setText("");
  }

  async function getSearchedDate(e) {
    e.preventDefault();
    let searchedDate = await fetch(`https://notesharing-backend.vercel.app/notes/date/${date}`);
    let searchResults = await searchedDate.json();
    navigate("/NoteLists/", { state: searchResults.payload });
    setDate("");
  }

  return (
    <div className={Style.Navbar}>
      <Title className={Style.Appname} />
      <div className={Style.Searchbar}>
        <SearchBar
          handleChange={handleChangeTopic}
          getSearchedTopics={getSearchedTopics}
          text={text}
        />
        <SelectDate
          handleChange={handleChangeDate}
          getDate={getSearchedDate}
          text={date}
        />
      </div>
    </div>
  );
}
