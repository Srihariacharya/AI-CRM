
import { useState } from "react";
import axios from "axios";

export default function ChatAssistant({ setFormData }) {
  const [message, setMessage] = useState("");

  const sendMessage = async () => {
    const res = await axios.post("http://localhost:8000/chat", {
      message,
    });

    const data = res.data.data;
    setFormData(data);
  };

  return (
    <div>
      <h2>AI Assistant</h2>
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Describe interaction..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}