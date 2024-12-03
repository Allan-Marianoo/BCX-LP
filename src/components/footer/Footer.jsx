import { useState } from 'react';
import './Footer.css';
import logo from '../../assets/images/footer/LogoBCX.png';
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import TermsModal from '../terms/TermsModal';
import PrivacyPolicy from '../privacy/PrivacyPolicy';

const Footer = () => {
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  const handleOpenModal = () => setIsTermsModalOpen(true);
  const handleCloseModal = () => setIsTermsModalOpen(false);
  const handleOpenPrivacyPolicy = () => setIsPrivacyModalOpen(true);
  const handleClosePrivacyPolicy = () => setIsPrivacyModalOpen(false);

  return (
    <footer className="footer">
      <div className="linha-separador">
        <div className="linha"></div>
      </div>
      <div className="containerFooter">
        <div className="fale-conosco">
          <h3>Fale Conosco</h3>
          <p>
            Entre em contato com o nosso suporte clicando no botão abaixo, ou entre em
            contato com a nossa equipe comercial em <span>comercial@bcxcorretora.com.br</span>
          </p>
          <div className="links">
            <a
              href="https://bcxcorretora.com.br/tarifas"
              target="_blank"
              rel="noopener noreferrer"
            >
              TARIFAS
            </a>
            <a href="#termos" onClick={handleOpenModal}>
              TERMOS
            </a>
            <a href="#politica" onClick={handleOpenPrivacyPolicy}>
              POLÍTICA DE PRIVACIDADE
            </a>
          </div>
        </div>

        <div className="logo">
          <img src={logo} alt="Logo BCX" />
        </div>

        <div className="entre-em-contato">
          <a
            href="https://wa.me/5547991280000?text=Gostaria%20de%20saber%20mais%20sobre%20a%20Bcx%20corretora"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btnContact">ENTRE EM CONTATO</button>
          </a>
          <div className="footer-bottom">
            <p>CNPJ 21.830.817/0001-67</p>
            <p>Todos os direitos reservados ©</p>
            <div className="social-icons">
              <a
                href="https://www.instagram.com/bcxcorretora"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram className="social-icon" />
              </a>
              <a
                href="https://www.linkedin.com/company/bcx-corretora"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="social-icon" />
              </a>
              <a
                href="https://x.com/bcxcorretora"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaTwitter className="social-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <TermsModal isOpen={isTermsModalOpen} onClose={handleCloseModal} />
      <PrivacyPolicy isOpen={isPrivacyModalOpen} onClose={handleClosePrivacyPolicy} />
    </footer>
  );
};

export default Footer;
