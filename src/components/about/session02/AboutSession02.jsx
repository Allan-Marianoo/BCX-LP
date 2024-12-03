import './AboutSession02.css';
import bullLogo from '../../../assets/images/about/bull-logo.png';
import etherium from '../../../assets/images/coins/eth.png';

const AboutSession02 = () => {
  return (
    <>
    <div className="about-sessions-container">
    <img src={etherium} alt="Etherium" className="etherium" />
      <div className="about-session02">
        <div className="about-container-principal">
          <div className="about-left-content">
            <div className="about-linha-detalhe"></div>
            <h2>Investimento simples e com credibilidade</h2>
          </div>
          <div className="about-right-content">
            <p className="about-description">Na BCX, acredita-se que o investimento em ativos virtuais é acessível a todos. O
              propósito da empresa é facilitar o acesso das pessoas ao mundo dos ativos virtuais,
              permitindo que todos compreendam esse universo e iniciem por si só seus investimentos.
            </p>
            <br />
            <br />
            <p className="about-description">
            A BCX atua como parceira nessa jornada, buscando proporcionar confiança nas decisões
              financeiras dos investidores. Através de um suporte abrangente, a empresa se dedica a
              oferecer todo o apoio necessário, para que os clientes se sintam cada vez mais seguros
              em suas estratégias de investimento.
            </p>
          </div>
        </div>
      </div>

      <section className="about-session03">
        <img src={bullLogo} alt="Touro BCX" className="bull-logo" />
        <div className="about-cards-container">
          <div className="about-card">
            <h2>MISSÃO</h2>
            <div className="underline"></div>
            <p>
              A BCX Corretora valoriza a transparência, segurança e confiança em
              suas operações e relacionamentos com seus clientes. A empresa
              também valoriza a inovação, mantendo-se atualizada com as mais
              recentes tecnologias e tendências do mercado de criptoativos.
            </p>
          </div>
          <div className="about-card">
            <h2>VISÃO</h2>
            <div className="underline"></div>
            <p>
              A BCX acredita em investir para todos, tornando o mercado de
              criptoativos acessível a todos os tipos de investidores. A empresa
              busca oferecer opções simples e confiáveis, com um histórico de
              sucesso e clientes satisfeitos. A visão da BCX é ajudar as pessoas
              a entender e investir no universo das criptoativos, democratizando
              o acesso a esse mercado e oferecendo segurança financeira e
              jurídica, além de praticidade nas transações.
            </p>
          </div>
          <div className="about-card">
            <h2>VALOR</h2>
            <div className="underline"></div>
            <p>
              A BCX Corretora valoriza seus Clientes, entregando transparência e
              segurança em suas operações. A empresa também valoriza a inovação,
              mantendo-se atualizada com as mais recentes tecnologias e
              tendências do mercado de criptoativos.
            </p>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default AboutSession02;
