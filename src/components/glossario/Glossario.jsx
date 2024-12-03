import "./Glossario.css";

const Glossario = () => {
  return (
    <div className="glossario-page">
      <div className="glossario-banner">
        <h1>Glossário de Termos</h1>
      </div>
      <div className="glossario-content">
        <div className="glossario-items">
          <div className="glossario-item-left">
            <div className="icon-left">
              <i className="fab fa-halfx fa-bitcoin"></i>
            </div>
            <div className="content">
              <h2>Bitcoin</h2>
              <p>
                O Bitcoin é uma criptomoeda descentralizada e digital, baseado
                em uma tecnologia chamada blockchain. O Bitcoin pode ser usado
                como meio de pagamento, investimento ou reserva de valor, sendo
                uma alternativa aos sistemas financeiros tradicionais,
                permitindo transações rápidas, seguras, sigilosas, globais e com
                taxas baixas.
              </p>
            </div>
          </div>
          <div className="glossario-item-right">
            <div className="icon-right">
              <i className="fa fa-halfx fa-piggy-bank"></i>
            </div>
            <div className="content">
              <h2>Mineração</h2>
              <p>
                A mineração de criptomoedas é o processo de verificação e
                registro de transações em uma rede blockchain, também chamada de
                “prova de trabalho” ou “proof of work”. Os mineradores utilizam
                poder computacional para resolver algoritmos complexos e, em
                troca, são recompensados com novas unidades da criptomoeda. Além
                de criar novas moedas, a mineração também garante a segurança e
                integridade das transações na rede.
              </p>
            </div>
          </div>
          <div className="glossario-item-left">
            <div className="icon-left">
              <i className="fa fa-halfx fa-cubes"></i>
            </div>
            <div className="content">
              <h2>Blockchain</h2>
              <p>
              Uma rede blockchain é uma infraestrutura descentralizada e distribuída, composta por um conjunto de computadores interconectados, conhecidos como nós. Essa rede permite o registro, a validação e o armazenamento de informações de forma transparente, segura e imutável. Em uma rede blockchain, as transações e os dados são organizados em blocos, que são interligados de forma sequencial, formando uma cadeia contínua de blocos, de modo que cada bloco contém um conjunto de transações validadas e um registro do bloco anterior por meio de um código chamado hash, o que garante a integridade e a imutabilidade dos dados. O funcionamento de uma rede blockchain é baseado em um consenso distribuído, onde os nós participantes cooperam para validar e confirmar as transações. Isso significa que não há uma autoridade central controlando a rede e todos os computadores ou nós participantes fiscalizam e validam às informações contidas ali naqueles blocos, tornando-a resistente a falhas e
              </p>
            </div>
          </div>
          <div className="glossario-item-right">
            <div className="icon-right">
              <i className="fa fa-halfx fa-coins"></i>
            </div>
            <div className="content">
              <h2>Wallet</h2>
              <p>
              Uma carteira digital de criptomoedas é um mecanismo que permite armazenar criptomoedas e realizar transferências utilizando o computador ou celular. Normalmente é um software ou um hardware que permite um usuário guardar seu montante em criptomoeda, uma curiosidade, às Wallets possuem Seed Phrase, às vezes chamada de Recovery Phrase, é uma série de 12 palavras geradas por sua carteira de criptomoedas (wallet), que pode ser utilizada para a recuperação e restauração da mesma, tenha sempre sua Seed ou Frase Secreta da Wallet bem guardada, ela é seu backup físico.
              </p>
            </div>
          </div>
          <div className="glossario-item-left">
            <div className="icon-left">
              <i className="fa fa-halfx fa-exchange-alt"></i>
            </div>
            <div className="content">
              <h2>Negociações peer-to-peer ou P2P</h2>
              <p>
              É um modelo de transação direta entre duas partes, sem a necessidade de intermediários ou autoridades centralizadas. No caso do Bitcoin de Wallet para Wallet. Nesse tipo de negociação, as partes envolvidas interagem e realizam transações diretamente entre si, utilizando uma plataforma ou rede que facilita a conexão e a comunicação. Nessa modalidade, as partes precisam se preocupar com o cumprimento da Resolução RFB nº 1888. A BCX está em conformidade com essa resolução, gerando os relatórios de INs (Instrução Normativa) ao BACEN (Banco Central) de toda transação que intermedia.
              </p>
            </div>
          </div>
          <div className="glossario-item-right">
            <div className="icon-right">
              <i className="fa fa-halfx fa-money-bill"></i>
            </div>
            <div className="content">
              <h2>Intermediação de Compra/Venda de Criptoativos</h2>
              <p>
              A BCX oferece serviços de intermediação de forma regular por meio do seu Livro de Ofertas e por meio de um sistema, garantindo a entrega dos ativos simultaneamente para ambas as partes da negociação. Além disso, a empresa automatiza todo o processo legal, incluindo a geração de notas fiscais, documentação para o Banco Central e instruções normativas. Isso significa que você pode adquirir criptomoedas pela BCX e guardá-las para futuras vendas ou para uso no exterior, seja por meio de caixas eletrônicos de criptomoedas espalhados pelo mundo ou por meio de corretoras parceiras da BCX no exterior. Além disso, você pode liquidar suas criptomoedas em diversos bancos que já aceitam esse ativo, oferecendo uma alternativa mais rápida, econômica e eficiente em comparação com os métodos tradicionais de transferência internacional, como o Swift. É importante destacar que todas essas operações são realizadas de forma segura e legal por meio da BCX Corretora.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Glossario;
