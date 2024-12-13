import { useState } from 'react';
import Feedback1 from '../../../assets/images/feedback-clients/feedback1.png';
import Feedback2 from '../../../assets/images/feedback-clients/feedback2.png';
import Feedback3 from '../../../assets/images/feedback-clients/feedback3.png';
import Feedback4 from '../../../assets/images/feedback-clients/feedback4.png';
import './HomeSession03.css';

const HomeSession03 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      image: Feedback1,
    },
    {
      image: Feedback2,
    },
    {
      image: Feedback3,
    },
    {
      image: Feedback4,
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 3 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 >= testimonials.length ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="session03">
      <div className="container">
        <h2 className="session03-title">O QUE DIZEM NOSSOS CLIENTES</h2>
        <div className="carousel-container">
          <button className="carousel-button left" onClick={handlePrev}>
            <i className="fas fa-chevron-left"></i>
          </button>
          <div className="testimonial-cards">
            {testimonials
              .slice(currentIndex, currentIndex + 3)
              .map((testimonial, index) => (
                <div className="testimonial-card" key={index}>
                  <img
                    src={testimonial.image}
                    alt={`Feedback ${index + 1}`}
                    className="testimonial-image"
                  />
                </div>
              ))}
          </div>
          <button className="carousel-button right" onClick={handleNext}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeSession03;
