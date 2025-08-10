import React, { useState } from "react";

export default function MemberForm({ apiBase }) {
  const [form, setForm] = useState({ first_name: "", last_name: "", email: "", phone: "" });
  const [status, setStatus] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    const res = await fetch(`${apiBase}/members/`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(form)
    });
    if (res.ok) { setStatus("Welcome! You're registered."); setForm({first_name:"", last_name:"", email:"", phone:""}); }
    else setStatus("Error registering.");
  };

  return (
    <section id="members" className="my-5">
      <h3>Register as a New Member</h3>
      <form onSubmit={submit}>
        <div className="row">
          <div className="col-md-6"><input required className="form-control mb-2" placeholder="First name" value={form.first_name} onChange={e => setForm({...form, first_name: e.target.value})} /></div>
          <div className="col-md-6"><input className="form-control mb-2" placeholder="Last name" value={form.last_name} onChange={e => setForm({...form, last_name: e.target.value})} /></div>
        </div>
        <input className="form-control mb-2" placeholder="Email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
        <input className="form-control mb-2" placeholder="Phone" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
        <button className="btn btn-success">Register</button>
      </form>
      <div className="mt-2">{status}</div>
    </section>
  );
}
