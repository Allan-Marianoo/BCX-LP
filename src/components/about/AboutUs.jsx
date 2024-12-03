import "./AboutUs.css";
import AboutSession01 from "./session01/AboutSession01";
import AboutSession03 from "./session03/AboutSession03";
import AboutSession02 from "./session02/AboutSession02";

const AboutUs = () => {
  return (
    <div className="aboutUs-page">
      <div className="aboutUs-banner">
        <h1>
          Conheça <span>nossa trajetória</span>
        </h1>
      </div>

      <AboutSession01 />
      <AboutSession02 />
      <AboutSession03 />

    </div>
  );
};

export default AboutUs;
