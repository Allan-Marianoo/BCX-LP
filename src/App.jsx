import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Glossario from './components/glossario/Glossario';
import AboutUs from "./components/about/AboutUs";
import Faq from './components/faq/Faq';
import ScrollToTop from './components/ScrollToTop';

import '@fortawesome/fontawesome-free/css/all.min.css';


const App = () => {
  return (
    <Router>
      <Header />
      <ScrollToTop />
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/glossario" element={<Glossario />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};


export default App;
