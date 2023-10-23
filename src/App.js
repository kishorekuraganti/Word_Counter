import React, { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [text, settext] = useState("");
  const [wordcount, setwordcount] = useState(0);
  const changeHandler = (event) => {
    settext(event.target.value);
  };
  useEffect(() => {
    const words = text.split(" ");
    let wordcount = 0;
    words.forEach((word) => {
      if (word.trim() !== "") {
        wordcount++;
      }
    });
    setwordcount(wordcount);
  }, [text]);
  return (
    <div id="id1">
      <p id="id2">
        <b>Responsive Paragraph Word</b>
      </p>
      <p id="id2">
        <b>Counter</b>
      </p>
      <textarea
        className="class1"
        value={text}
        onChange={changeHandler}
      ></textarea>
      <p id="id3">Word Count: {wordcount}</p>
    </div>
  );
}
