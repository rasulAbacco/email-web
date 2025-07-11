import { useState } from "react";

export default function ChatBot() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        className="bg-primary text-white rounded-full w-12 h-12 shadow-lg"
        onClick={() => setOpen(!open)}
      >
        💬
      </button>
      {open && (
        <div className="mt-2 w-80 h-96 bg-background border rounded-xl shadow-xl p-4">
          <h4 className="font-semibold mb-2">Ask something</h4>
          <textarea className="w-full h-32 p-2 border rounded bg-muted mb-2" />
          <button className="w-full py-2 bg-primary text-white rounded">Send</button>
        </div>
      )}
    </div>
  );
}
