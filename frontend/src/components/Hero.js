import React from "react";

export default function Hero(){
  return (
    <section className="bg-dark text-white d-flex align-items-center" style={{ height: "60vh", backgroundImage: "url('https://source.unsplash.com/1600x900/?church')", backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="container text-center">
        <h1 className="display-4">Welcome to Testimony Assembly Church</h1>
        <p className="lead">Loving God. Loving People. Making Disciples.</p>
      </div>
    </section>
  );
}
