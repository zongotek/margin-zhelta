import { useEffect, useState } from "react";
import { api } from "../lib/api";

export default function Notes() {
  const [notes, setNotes] = useState([]);
  const [text, setText] = useState("");
  useEffect(() => { api.get("/api/notes").then(d => setNotes(d.notes || [])); }, []);
  const add = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    const n = await api.post("/api/notes", { text });
    setNotes((x) => [n, ...x]);
    setText("");
  };
  return (
    <section className="py-12 border-t border-zinc-100">
      <h2 className="text-xl font-medium tracking-tight">Your notes</h2>
      <p className="mt-1 text-sm text-zinc-500">Connected to <code className="bg-zinc-100 px-1.5 py-0.5 rounded">{import.meta.env.VITE_API_BASE_URL || "/api"}</code></p>
      <form onSubmit={add} className="mt-6 flex gap-2">
        <input value={text} onChange={e => setText(e.target.value)} placeholder="A small thought…" className="flex-1 h-11 px-4 rounded-xl bg-zinc-100 focus:bg-white focus:ring-2 focus:ring-[#C4A45C] outline-none"/>
        <button className="h-11 px-5 rounded-xl bg-[#C4A45C] hover:bg-[#A88A4A] text-white font-medium">Add</button>
      </form>
      <ul className="mt-6 space-y-2">
        {notes.length === 0
          ? <li className="text-sm text-zinc-400">No notes yet — backend may not be deployed.</li>
          : notes.map(n => <li key={n.id || n._id} className="p-4 rounded-xl border border-zinc-200">{n.text}</li>)
        }
      </ul>
    </section>
  );
}
