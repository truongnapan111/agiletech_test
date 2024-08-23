import React, { useState, useEffect } from 'react';
import './Testimonials.css';
import { slideshowGalleries } from '../../services/galleryService';
const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [gallery, setGallery] = useState<any[]>([]);

  useEffect(() => {
    slideshowGalleries(setGallery);

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % gallery.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(timer);
  }, [gallery.length]);

  return (
    <section className="testimonials">
      <h2>Testimonials</h2>
      {gallery.length > 0 && (
        <div className="testimonial-slider">
          <div className="testimonial" key={current}>
            <img src={gallery[current].imageUrl} alt="Testimonial" className="testimonial-image" />
            <p>{`“${gallery[current].desctiption}”`}</p>
          </div>
        </div>
      )}
      <div className="testimonial-controls">
        <button onClick={() => setCurrent((prev) => (prev - 1 + gallery.length) % gallery.length)}>&lt;</button>
        <button onClick={() => setCurrent((prev) => (prev + 1) % gallery.length)}>&gt;</button>
      </div>
    </section>
  );
}

export default Testimonials;
