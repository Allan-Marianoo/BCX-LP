import { useState } from "react";
import "./Faq.css";

const Faq = () => {
  const faqData = [
    {
      id: 1,
      question: "Como criar uma conta na BCX?",
      answer:
        "Para começar, você precisará selecionar a opção 'Registre-se' em nosso website. Ao fazer isso, será necessário aceitar nossos Termos de Uso e preencher um formulário com seus dados pessoais. Certifique-se de fornecer dados precisos e atualizados, uma vez que essas informações são necessárias para cumprir os requisitos do processo de Conheça Seu Cliente (KYC, na sigla em inglês). Assim que o formulário for preenchido e enviado, você estará oficialmente registrado em nossa plataforma. Seja bem-vindo à BCX!",
    },
    {
      id: 2,
      question: "Com quais ativos virtuais a BCX trabalha?",
      answer:
        "Na BCX, estamos focados no Bitcoin, utilizando estratégias e análises de mercado para oferecer os melhores serviços. Estamos constantemente avaliando novas opções de ativos virtuais para ampliar nossa oferta no futuro.",
    },
    {
      id: 3,
      question: "Qual o público alvo da BCX Corretora?",
      answer:
        "A BCX Corretora atende a todos os públicos, sem fazer distinção. Tendo você um perfil tradicional, conservador ou arrojado, estamos disponíveis para atender às suas necessidades da melhor maneira possível. Nossa equipe está pronta para oferecer suporte e orientação em todas as etapas da sua experiência conosco.",
    },
    {
      id: 4,
      question: "Qual o diferencial da BCX Corretora?",
      answer:
        "A BCX Corretora oferece uma equipe com estratégias operacionais de Trade, além de profissionais qualificados e certificados para oferecer a melhor estratégia de acordo com o perfil do seu cliente.",
    },
    {
      id: 5,
      question: "O que é KYC (Know your customer)?",
      answer:
        "É o documento que exige que os provedores de serviços financeiros registrem informações e identifiquem seus clientes, sob lei 9.613/98, que dispõe sobre a prevenção da utilização do sistema financeiro para fins ilícitos, mais especificamente em seu Art. 10º; bem como também há regulamentação pelo Normativo SARB 011/2013 da Federação Brasileira de Bancos (Febraban) - PEP (Pessoa Politicamente Exposta);",
    },
  ];

  const [selectedFaq, setSelectedFaq] = useState(faqData[0]);

  return (
    <div className="faq-page">
  <div className="faq-header">
    <div className="faq-header-bar"></div>
    <h2 className="faq-header-title">Ainda com Dúvidas?</h2>
  </div>
  <div className="faq">
    <div className="faq-left">
      <ul className="faq-list">
        {faqData.map((item) => (
          <li
            key={item.id}
            className={`faq-item ${
              selectedFaq.id === item.id ? "selected" : ""
            }`}
            onClick={() => setSelectedFaq(item)}
          >
            <span>{item.question}</span>
            <span className="faq-arrow" onClick={() => setSelectedFaq(item)}>
              {selectedFaq.id === item.id ? (
                  <i className="fa-solid fa-chevron-right"></i>
                ) : (
                  <i className="fa-solid fa-chevron-down"></i>
              )}
            </span>
          </li>
        ))}
      </ul>
    </div>
    <div className="faq-right">
      <p>{selectedFaq.answer}</p>
    </div>
  </div>
</div>

  );
};

export default Faq;
