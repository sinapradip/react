import React from "react";
import notes from "../assets/notes";

export function Note() {
  return (
    <>
      <div className="note-container">
        {notes.map((note) => (
          <div className="note" key={note.key}>
            <h1>{note.title}</h1>
            <p>{note.content}</p>
          </div>
        ))}
      </div>
    </>
  );
}
