import React from "react";

export default function Pastor({ pastor }){
  if(!pastor) return null;
  return (
    <section id="pastor" className="my-5">
      <h2 className="text-center mb-4">Meet Our Pastor</h2>
      <div className="row align-items-center">
        <div className="col-md-4 text-center">
          <img src={pastor.image_url || "https://source.unsplash.com/300x300/?pastor"} alt={pastor.name} className="img-fluid rounded-circle shadow" />
        </div>
        <div className="col-md-8">
          <h4>{pastor.name}</h4>
          <p>{pastor.bio}</p>
        </div>
      </div>
    </section>
  );
}
