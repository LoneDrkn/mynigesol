"use client";

import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");

  return (
    <main className="container">
      <section className="card">
        <h1>Text Display</h1>
        <p className="intro">Type something below to see it displayed.</p>

        <label htmlFor="text-input">Your text</label>
        <input
          id="text-input"
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
          placeholder="Enter some text"
        />

        <div className="output" aria-live="polite">
          <h2>Displayed text</h2>
          <p>{text || "Your text will appear here."}</p>
        </div>
      </section>
    </main>
  );
}
