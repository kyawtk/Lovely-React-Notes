import { useEffect, useState } from "react";
import "./App.css";
import NoteList from "./components/NoteList";
import SearchBar from "./components/SearchBar";
import Header from "./components/Header";
function App() {
  const [darkMode, setDarkMode] = useState(false);
  function handleDarkMode() {
    setDarkMode(!darkMode);
  }
  const [searchText, setSearchText] = useState("");
  function handleSearch(e) {
    setSearchText(e.target.value);
  }

  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("react-notes-app-data"))
      ? JSON.parse(localStorage.getItem("react-notes-app-data"))
      : []
  );

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);
  function deleteNote(id) {
    setNotes((currentNotes) => {
      return currentNotes.filter((note) => note.id !== id);
    });
  }
  function saveNote(text) {
    if (!text) {
      return;
    }
    const date =
      new Date().toLocaleTimeString() + " " + new Date().toLocaleDateString();
    setNotes((currentNotes) => {
      return [
        { text: text, date: date, id: crypto.randomUUID() },
        ...currentNotes,
      ];
    });
  }
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);
  return (
    <div className={` ${darkMode ? "darkMode" : ""}`}>
      <div className="container">
        <Header darkMode={darkMode} handleDarkMode={handleDarkMode}></Header>
        <SearchBar
          searchText={searchText}
          handleSearch={handleSearch}
        ></SearchBar>
        <NoteList
          notes={notes.filter((note) =>
            note.text.toLocaleLowerCase().includes(searchText)
          )}
          saveNote={saveNote}
          deleteNote={deleteNote}
        ></NoteList>
      </div>
    </div>
  );
}

export default App;
