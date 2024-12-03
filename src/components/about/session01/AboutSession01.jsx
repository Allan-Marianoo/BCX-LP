import { useState } from 'react';
import bitcoin from "../../../assets/images/coins/bitcoin.png";
import risquinhos from "../../../assets/images/about/tracejado.png";
import './AboutSession01.css';

const AboutSession01 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    {
      year: "2012",
      content:
        "A BCX é uma corretora de ativos virtuais, especializada em Bitcoin, pioneira na América Latina, após algum tempo de planejamento e formação de parcerias entre fabricantes de equipamentos e outros fornecedores, surgiu em 2013 como um dos primeiros mineradores de Bitcoin. Desde então, a empresa tem se destacado pela sua expansão contínua e pela oferta de serviços abrangentes no mercado de ativos virtuais.",
    },
    {
      year: "2015",
      content:
        "Após alguns anos de experiência em mineração de criptoativos. Em 2015, a BCX expandiu suas operações para os Estados Unidos, fortalecendo sua presença internacional. Ao longo dos anos, a empresa conquistou um histórico de sucesso com a mineração própria de criptoativos. O que veio a ser um grande diferencial de mercado, aumentando ainda mais seu know how no mercado de ativos virtuais.",
    },
    {
      year: "2016",
      content:
        "Em 2016, a BCX ampliou sua atuação no mercado de corretagem de ativos virtuais, utilizando os excedentes da mineração de Bitcoin. Isso permitiu à empresa aumentar sua liquidez, vendendo esses ativos para seus primeiros clientes. Esses clientes, por sua vez, buscavam adquirir criptomoedas de forma segura, realizando transações diretamente de wallet para wallet, também conhecido como P2P (peer-to-peer).Essa abordagem de troca direta entre as partes envolvidas, permitiu a BCX estabelecer relacionamentos com pessoas de diferentes profissões, proporcionando um ambiente transparente, educativo e simples para a troca de moeda fiduciária por criptomoedas.",
    },  
    {
      year: "2017",
      content:
        "Em 2017, a BCX aprimorou suas operações de corretagem de criptomoedas originadas da mineração, implementando a automação de diversos processos de compra e venda. Essa estratégia de corretagem incluiu o uso de licenças, como o Profit Trailer®, e a contratação de desenvolvedores e especialistas de mercado. Além disso, a BCX expandiu suas operações para incluir a negociação de criptomoedas de parceiros de mercado. Essas iniciativas contribuíram para a evolução e o crescimento contínuo da empresa no setor.",
    },
    {
      year: "2018",
      content:
        "Em 2018, a BCX estabeleceu sua própria mineradora, solidificando sua presença no mercado. Além de fortalecer sua estratégia de corretagem, a empresa também desenvolveu expertise na avaliação do melhor lucro operacional na mineração. Isso foi possível ao selecionar opções com menor tempo de retorno do investimento, utilizando equipamentos de última geração, fornecedores internacionais confiáveis e locais seguros com acesso à energia elétrica limpa e renovável a custos reduzidos. Essa abordagem permitiu à BCX otimizar sua operação de mineração, garantindo resultados sólidos e sustentáveis",
    },
    {
      year: "2019",
      content:
        "É dado início ao planejamento de uma plataforma idealizada para oferta dos serviços de intermediação da empresa e oferecer aos Clientes um modo seguro de negociar seus ativos virtuais.",
    },
    {
        year: "2020",
        content:
          "Em meio às incertezas de mercado geradas pela pandemia que se iniciara, à BCX optou por fortalecer à segurança de suas estratégias de mercado, tendo liquidado os criptoativos Bitcoin e outras Altcoins, que estavam em sua custódia, às vésperas dos eventos pandêmicos que abalaram as bolsas de valores do mundo todo(circuit breakers) e recomprando os mesmos na retomada de mercado por valores bem mais baixos, acreditando como ocorreu que seu valor seria retomado. Assim se sucedeu, mais que isso, esses ativos dobraram de valor.",
      },
      {
        year: "2021",
        content:
          "Em execução e planejamento de sua plataforma, a BCX procurou seus mais sérios parceiros de negócios para fomentar seu desenvolvimento, novos nichos de mercado estavam surgindo e novas regulamentações para o mercado brasileiro, buscamos então formar uma equipe de parceiros dos sonhos para evoluirmos esse projeto.",
      },
      {
        year: "2022",
        content:
          "Plataforma sendo finalizada, buscamos mais soluções de mercado para adequarmos nossos processos tecnológicos, às regulamentações que vêem sendo implementadas e estão sempre em constante evolução. Nossos Clientes poderão dispor, de toda segurança jurídica e fiscal para negociarem seus ativos virtuais e gerirem seus investimentos de forma rápida, segura e de acordo com os processos fiscais e legais vigentes, tudo de forma simples e automatizada, recebendo em seu email toda documentação necessária para seus informes de rendimentos e o que mais for necessário para sua segurança.",
      },
      {
        year: "2023",
        content:
          "Lançamento da plataforma de negócios da BCX Corretora de ativos virtuais. Agora nossos Clientes tem mais facilidades para administrar com toda segurança seus investimentos em ativos virtuais através de sua parceira em seu futuro financeiro. E como dizemos:",
      },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };
  
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + items.length) % items.length
    );
  };
  

  return (
    <section className="about-session01">
      <div className="about-content-container">
        <button className="about-carousel-button left" onClick={handlePrev}>
          &#8249;
        </button>

        <div className="timeline">
         {items.map((item, index) => {
         const distance = Math.abs(index - currentIndex);
          let className = "timeline-item hidden";

        if (distance === 0) {
          className = "timeline-item active";
        } else if (distance === 1) {
          className = "timeline-item nearby";
        } else if (distance === 2) {
          className = "timeline-item partly-visible";
        }

    return (
      <div className={className} key={index}>
        <h2>{item.year}</h2>
        <p>{item.content}</p>
      </div>
    );
  })}
</div>

        <button className="about-carousel-button right" onClick={handleNext}>
          &#8250;
        </button>
      </div>
        <img src={bitcoin} alt="Moeda" className="bitcoin" />
      <div className="risquinhos-container">
        <img src={risquinhos} alt="Risquinhos verticais" />
      </div>
    </section>
  );
};

export default AboutSession01;
