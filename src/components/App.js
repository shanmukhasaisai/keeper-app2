import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      {Notes.map((NewNote) => (
        <Note
          key={NewNote.key}
          title={NewNote.title}
          content={NewNote.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
