// src/components/Testimonials.js
import React from 'react';
import '../styles/Testimonials.css';

const testimonials = [
  {
    name: "Jane Doe",
    position: "Customer",
    message: "JalRakshak has truly transformed the way I manage water quality in my apartment. The real-time monitoring and alerts are incredibly helpful.",
    image: "path/to/jane-doe.jpg"
  },
  {
    name: "John Smith",
    position: "Client",
    message: "The team at JalRakshak is professional and dedicated. Their water purification solutions are top-notch and have made a noticeable difference.",
    image: "path/to/john-smith.jpg"
  },
  {
    name: "Emily Johnson",
    position: "User",
    message: "I love the user-friendly interface and the peace of mind knowing that my water is always safe. Highly recommend JalRakshak!",
    image: "path/to/emily-johnson.jpg"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <h2>What Our Users Say</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-item">
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            <blockquote>
              <p>{testimonial.message}</p>
              <footer>
                <cite>{testimonial.name}, <span>{testimonial.position}</span></cite>
              </footer>
            </blockquote>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
