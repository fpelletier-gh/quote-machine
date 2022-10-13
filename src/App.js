import "./App.scss";
import { useFetch } from "./hooks/useFetch";
import { useState, useEffect } from "react";
import { BsTwitter } from "react-icons/bs";

function App() {
  const url = "https://type.fit/api/quotes";
  const { data } = useFetch(url);
  const [quote, setQuote] = useState({});

  useEffect(() => {
    if (data && data.length > 0 && !quote.text) {
      const min = 0;
      const max = data.length;
      const randomNumber = Math.floor(Math.random() * (max - min) + min);

      setQuote(data[randomNumber]);
    }
  }, [data, quote]);

  function getRandomQuote() {
    const min = 0;
    const max = data.length;
    const randomNumber = Math.floor(Math.random() * (max - min) + min);

    setQuote(data[randomNumber]);
  }

  return (
    <div className="app">
      <header>
        <h1 className="header">Quote Machine</h1>
      </header>
      <main id="quote-box">
        <p className="" id="text">
          {quote.text}
        </p>
        <p className="" id="author">
          - {quote.author || "Unknown"}
        </p>
        <nav className="nav">
          <a
            className="tweet-links"
            href="https://twitter.com/intent/tweet"
            id="tweet-quote"
            target="_blank"
            rel="noreferrer"
          >
            <BsTwitter className="tweet-icons" />
          </a>
          <button
            id="new-quote"
            className="primary-btn"
            onClick={getRandomQuote}
          >
            New quote
          </button>
        </nav>
      </main>
      <footer className="footer">Created by Francis Pelletier</footer>
    </div>
  );
}

export default App;
