import React, { useState, useEffect } from "react";
import "./App.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

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
    getNewQuote();
  }, []);

  return (
    <div className="card-container">
      <Card className="card">
        <Card.Body className="card-body" id="quote-box">
          <Card.Title className="card-title">Random Quote Generator</Card.Title>
          <Card.Text className="card-text" id="card-text">
            {quote && (
              <>
                <h6 className="text" id="text">
                  {quote}
                </h6>
                <h4 className="author" id="author">
                  - {author}
                </h4>
              </>
            )}
          </Card.Text>
          <Button class="btn" id="custom-button" onClick={getNewQuote}>
            New Quote
          </Button>
          <Card.Link
            id="tweet-quote"
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
              `"${quote}" - ${author}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Tweet Quote
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
