import React, { useState } from "react";

export default function ContactForm({ apiBase }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending...");
    const res = await fetch(`${apiBase}/inquiries/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      setStatus("Thank you — message sent.");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus("Error sending — try again.");
    }
  };

  return (
    <section id="contact" className="my-5">
      <h3>Contact Us</h3>
      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2" placeholder="Name" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
        <input className="form-control mb-2" placeholder="Email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
        <textarea className="form-control mb-2" placeholder="Message" required value={form.message} onChange={e => setForm({...form, message: e.target.value})} />
        <button className="btn btn-primary">Send</button>
      </form>
      <div className="mt-2">{status}</div>
    </section>
  );
}
