import "./App.css";
import HomePage from "../HomePage/HomePage.js";
import NotesPage from "../NotesPage/NotesPage.js";
import AddNotesPage from "../AddNotesPage/AddNotesPage.js";
import NoteLists from "../NoteLists/NoteLists.js";

import { Routes, Route } from "react-router-dom";
import "antd/dist/antd.less";
import Navbar from "../Navbar/Navbar.js";
import Style from "./App.module.css";

function App() {
  return (
    <div className={Style.App}>
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/NotesPage" element={<NotesPage />} />
          <Route path="/AddNotesPage" element={<AddNotesPage />} />
          <Route path="/NoteLists" element={<NoteLists />} />
        </Routes>
    </div>
  );
}

export default App;
