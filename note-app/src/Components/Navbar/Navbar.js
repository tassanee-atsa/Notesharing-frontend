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
      `https://notesharing-twi4.onrender.com/notes/topics/${text}`
    );
    let searchResults = await searchedTopics.json();
    console.log(searchResults);
    navigate("/ResultsPage/", { state: searchResults.payload });
    setText("");
  }

  async function getSearchedDate(e) {
    e.preventDefault();
    let searchedDate = await fetch(`https://notesharing-twi4.onrender.com/notes/date/${date}`);
    let searchResults = await searchedDate.json();
    //console.log(searchResults);
    navigate("/NotesPage/", { state: searchResults.payload });
    setDate("");
  }

  return (
    <div className={Style.Navbar}>
      <Title className={Style.Appname} />
      <div className={Style.Searchbar}>
        <SearchBar
          handleChange={handleChangeTopic}
          getAllTopics={getSearchedTopics}
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
