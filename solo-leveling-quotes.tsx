import type React from "react"
import { useState } from "react"

const quotes: string[] = [
  "The only limit to our realization of tomorrow is our doubts of today.",
  "Do not wait to strike till the iron is hot, but make it hot by striking.",
  "Act as if what you do makes a difference. It does.",
  "Dream big. Start small. Act now.",
  "What we fear doing most is usually what we most need to do.",
]

const SoloLevelingQuotes: React.FC = () => {
  const [quote, setQuote] = useState<string>("Click to awaken your next quest...")

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length)
    setQuote(quotes[randomIndex])
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#121212",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          marginBottom: "1rem",
          textShadow: "0 0 10px #007bff",
        }}
      >
        ⚡ Solo Leveling Quotes ⚡
      </h1>
      <p
        style={{
          fontSize: "1.2rem",
          fontStyle: "italic",
          marginBottom: "2rem",
          maxWidth: "80%",
          lineHeight: "1.5",
        }}
      >
        "{quote}"
      </p>
      <button
        onClick={generateQuote}
        style={{
          padding: "0.75rem 1.5rem",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "1rem",
          fontWeight: "bold",
          textTransform: "uppercase",
          transition: "all 0.3s ease",
          boxShadow: "0 0 15px #007bff",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = "#0056b3"
          e.currentTarget.style.boxShadow = "0 0 25px #007bff"
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = "#007bff"
          e.currentTarget.style.boxShadow = "0 0 15px #007bff"
        }}
      >
        Level Up
      </button>
    </div>
  )
}

export default SoloLevelingQuotes

