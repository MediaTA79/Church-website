import React from "react";

export default function EventsCarousel({ events }) {
  if (!events || events.length === 0) return null;

  return (
    <section id="events" className="my-5">
      <h2 className="text-center mb-4">Upcoming Events</h2>
      <div id="eventsCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {events.map((ev, idx) => (
            <div key={ev.id} className={"carousel-item " + (idx === 0 ? "active" : "")}>
              <img src={ev.image_url || "https://source.unsplash.com/1000x400/?church,event"} className="d-block w-100" alt={ev.title} style={{ objectFit: 'cover', height: 400 }} />
              <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-2">
                <h5>{ev.title}</h5>
                <p>{ev.description}</p>
                <small>{new Date(ev.date).toLocaleString()}</small>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#eventsCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#eventsCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </section>
  );
}
