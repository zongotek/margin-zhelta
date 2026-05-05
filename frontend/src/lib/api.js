const BASE = import.meta.env.VITE_API_BASE_URL || "";

export const api = {
  async get(p) { const r = await fetch(`${BASE}${p}`); return r.json(); },
  async post(p, body) {
    const r = await fetch(`${BASE}${p}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    return r.json();
  },
};
