import { Link } from 'react-router-dom';
import './AboutSession03.css';

const AboutSession03 = () => {
  return (
    <section className="about-session3">
      <div className="button-container">
        <Link to="/glossario" className="glossary-button">
          <span className="button-icon">&#8250;</span> GLOSSÁRIO
        </Link>
      </div>
    </section>
  );
};

export default AboutSession03;
