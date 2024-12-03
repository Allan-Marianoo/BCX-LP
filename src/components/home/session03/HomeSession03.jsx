import { useState } from 'react';
import './HomeSession03.css';

const HomeSession03 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'XXXX XXXX',
      text: 'A BCX oferece opções para cada tipo de perfil. Empresa sólida e comprometida com o cliente, sempre disposta a ajudar e negociar da melhor maneira. Seguro, transparente e de alto desempenho.',
    },
    {
      name: 'RENATO ESQUIBEL',
      text: 'Durante 05 anos de investimentos com a BCX, todos os planejamentos pessoais foram concretizados após a análise de melhores perfis de investimentos ao cliente, com os melhores cenários de mercados e estratégias.',
    },
    {
      name: 'XXXXXXX XXXXXXX',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus quam sem, vel lacinia arcu interdum in.',
    },
    {
      name: 'MARIA DA SILVA',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus quam sem, vel lacinia arcu interdum in.',
    },
    {
      name: 'JOÃO CARLOS',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus quam sem, vel lacinia arcu interdum in.',
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
                  <div className="card-header">
                    <div className="testimonial-avatar"></div>
                    <h4>{testimonial.name}</h4>
                    <div className="highlight"></div>
                  </div>
                  <p>{testimonial.text}</p>
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
