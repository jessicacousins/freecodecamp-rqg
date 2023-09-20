import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const getNewQuote = async () => {
    try {
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      setQuote(data.content);
      setAuthor(data.author);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // Fetch initial quote on component mount
    getNewQuote();
  }, []);

  return (
    <div className="container">
      <div className="quote-box" id="quote-box">
        <div className="text" id="text">
          <p>{quote}</p>
        </div>
        <div className="author" id="author">
          <p>- {author}</p>
        </div>
        <button id="new-quote" onClick={getNewQuote}>
          New Quote
        </button>
        <a
          id="tweet-quote"
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
            `"${quote}" - ${author}`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Tweet Quote
        </a>
      </div>
    </div>
  );
}

export default App;
