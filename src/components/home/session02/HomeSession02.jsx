import './HomeSession02.css';
import bitcoin from '../../../assets/images/coins/bitcoin.png'; 
import eth from '../../../assets/images/coins/eth.png';

const HomeSession02 = () => {
  return (
    <div className="session02">
      <div className="container-principal">
        <div className="left-content">
          <p className="description">Na BCX, acredita-se que o investimento em ativos virtuais é acessível a todos. O
            propósito da empresa é facilitar o acesso das pessoas ao mundo dos ativos virtuais,
            permitindo que todos compreendam esse universo e iniciem por si só seus investimentos.
          </p>
          <br />
          <br />
          <p className="description">
          A BCX atua como parceira nessa jornada, buscando proporcionar confiança nas decisões
            financeiras dos investidores. Através de um suporte abrangente, a empresa se dedica a
            oferecer todo o apoio necessário, para que os clientes se sintam cada vez mais seguros
            em suas estratégias de investimento.
          </p>
        </div>
        <div className="right-content">
        <div className="linha-detalhe"></div>
        <h2>BCX, um modo seguro de negociar seus ativos.</h2>
        </div>
        <div className="moeda-container">
        <img src={bitcoin} alt="Bitcoin" className="moeda-entre-sessoes" />
      </div>
      </div>
      <div className="moeda-container">
        <img src={eth} alt="Ethereum" className="eth" />
      </div>
    </div>
  );
};

export default HomeSession02;
