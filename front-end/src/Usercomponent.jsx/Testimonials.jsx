import { useState } from "react";

const testimonials = [
  { name: "Snegan", comment: <h1>"Great service! The car was clean and well-maintained."</h1> },
  { name: "Mohan Raj", comment: <h1>"Smooth booking process and friendly support."</h1> },
  { name: "Abishek", comment: <h1>"Affordable prices and a fantastic vehicle selection!"</h1> },
];
export default function Testimonials() {
  const [index, setIndex] = useState(0);

  return (
    <div className="testi">
      <h2>Customer Testimonials</h2>
      <div>
        <p>"{testimonials[index].comment}"</p>
        <h3>- {testimonials[index].name}</h3>
      </div>
      <button
        onClick={() => setIndex((index + 1) % testimonials.length)}
      >
        Next
      </button>
    </div>
  );
}


