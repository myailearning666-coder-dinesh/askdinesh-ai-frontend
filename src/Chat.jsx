import { useState } from "react";
import "./Chat.css";
import avatar from "./assets/avatar.png"; // ✅ must exist

export default function Chat() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  async function askAI() {
    if (!question.trim()) return;

    setLoading(true);
    setAnswer("");

    try {
      const res = await fetch("http://127.0.0.1:8000/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question, module: "All" })
      });

      const data = await res.json();
      setAnswer(data.answer || "No response");
    } catch {
      setAnswer("❌ Backend not reachable");
    } finally {
      setLoading(false);
    }
  }

  function newChat() {
    setQuestion("");
    setAnswer("");
  }

  return (
    <div className="page">
      <div className="chat-card">
        <div className="header">
          
          {/* ✅ REAL IMAGE AVATAR */}
          <div className="avatar">
            <img src={avatar} alt="Dinesh" />
          </div>

          <div>
            <h1>Welcome to Ask Dinesh.AI</h1>
            <p>Your Intelligent AI Assistant for Microsoft Dynamics 365 F&amp;O</p>
            <small>Designed & Engineered by Dinesh</small>
          </div>
        </div>

        <input
          className="input"
          placeholder="Ask anything about Dynamics 365 F&O..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />

        <div className="actions">
          <button onClick={askAI}>Ask AI</button>
          <button className="secondary" onClick={newChat}>
            New Chat
          </button>
        </div>

        {loading && <div className="thinking">● ● ●</div>}

        {answer && <div className="answer">{answer}</div>}
      </div>
    </div>
  );
}
