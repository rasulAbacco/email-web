import { useState } from "react";
import "../index.css";

export default function ChatBot() {
  const [open, setOpen] = useState(false);

  return (
    <div className="chatbot-container">
      <button className="chatbot-toggle" onClick={() => setOpen(!open)}>
        💬
      </button>

      {open && (
        <div className="chatbot-box">
          <h4 className="chatbot-title">Ask something</h4>
          <textarea className="chatbot-textarea" placeholder="Type your message..." />
          <button className="chatbot-send">Send</button>
        </div>
      )}
    </div>
  );
}
