import React, { useState, useEffect } from 'react';
import './Testimonials.css';
import { slideshowGalleries } from '../../services/galleryService';

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [gallery, setGallery] = useState<any[]>([]);
  const [isSliding, setIsSliding] = useState(false); // State to handle sliding effect

  useEffect(() => {
    slideshowGalleries(setGallery);

    const timer = setInterval(() => {
      handleNextSlide();
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(timer);
  }, [gallery.length]);

  const handleNextSlide = () => {
    setIsSliding(true); // Start sliding effect
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % gallery.length);
      setIsSliding(false); // End sliding effect
    }, 500); // Duration matches CSS transition time
  };

  const handlePrevSlide = () => {
    setIsSliding(true); // Start sliding effect
    setTimeout(() => {
      setCurrent((prev) => (prev - 1 + gallery.length) % gallery.length);
      setIsSliding(false); // End sliding effect
    }, 500); // Duration matches CSS transition time
  };

  return (
    <section className="testimonials">
      <h2>Testimonials</h2>
      {gallery.length > 0 && (
        <div className={`testimonial-slider ${isSliding ? 'sliding' : ''}`}>
          <div className="testimonial" key={current}>
            <img src={gallery[current].imageUrl} alt="Testimonial" className="testimonial-image" />
            <p>{`“${gallery[current].desctiption}”`}</p>
          </div>
        </div>
      )}
      <div className="testimonial-controls">
        <button onClick={handlePrevSlide}>&lt;</button>
        <button onClick={handleNextSlide}>&gt;</button>
      </div>
    </section>
  );
}

export default Testimonials;
