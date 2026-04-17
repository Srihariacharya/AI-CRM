
import { useState } from "react";
import ChatAssistant from "./components/ChatAssistant";
import InteractionForm from "./components/InteractionForm";

function App() {
  const [formData, setFormData] = useState({});

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <InteractionForm formData={formData} />
      <ChatAssistant setFormData={setFormData} />
    </div>
  );
}

export default App;