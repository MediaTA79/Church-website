import React, { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Pastor from "./components/Pastor";
import Events from "./components/Events";
import ContactForm from "./components/ContactForm";
import MemberForm from "./components/MemberForm";
import ChurchNavbar from "./components/Navbar";

const API = process.env.REACT_APP_API || "http://localhost:8000/api";

function App() {
  const [pastor, setPastor] = useState();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch(`${API}/pastor/`)
      .then((r) => r.json())
      .then((data) => setPastor(data[0] || null))
      .catch(console.error);

    fetch(`${API}/events/`)
      .then((r) => r.json())
      .then((data) => setEvents(data))
      .catch(console.error);
  }, []);
  
  console.log("App rendering", pastor, events);
  return (
    <div>
      <ChurchNavbar />
      <Hero />
      <div className="container my-5">
        <Pastor pastor={pastor} />
        <Events events={events} />
        <MemberForm apiBase={API} />
        <ContactForm apiBase={API} />
      </div>
    </div>
  );
}

export default App;

