import './PrivacyPolicy.css';
import PropTypes from 'prop-types';

const PrivacyPolicy = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className='div-modal-close'>
        <button className="close-modal" onClick={onClose}>
            &times;
          </button>
        </div>
          
        <div className="modal-header">
          <h4 className="modal-title">POLÍTICA DE PRIVACIDADE BCX</h4>
          <div className="highlight-title"></div>
        </div>
        <div className="modal-body">
          <div className="terms-content">
            <h5>1. QUAL O OBJETIVO E A APLICABILIDADE DESTA POLÍTICA</h5>
            <p>1.1 Esta Política de Privacidade (“Política de Privacidade”) é aplicável aos usuários (“Usuários”) e visitantes (“Visitantes”) da plataforma da BC COINS INTERMEDIADORA LTDA.. denominada “BCX”, inscrita no CNPJ/ME sob o nº 21.830.817/0001-67, e tem como objetivo esclarecer as suas práticas no que diz respeito à privacidade e o tratamento dos dados pessoais dos seus usuários e visitantes da plataforma e site acessíveis no domínio “https://www.bcxcorretora.com.br”, além de demonstrar o seu comprometimento com as melhores medidas de segurança das informações e transparência para resguardar a privacidade e proteção de dados pessoais.</p>
            <p>1.2 As condições estabelecidas nesta Política de Privacidade são aplicáveis no âmbito da utilização dos serviços disciplinada nos Termos de Uso e abrange todo o tratamento dado pela BCX aos dados pessoais necessários para atingir as finalidades determinadas neste documento e que sejam capazes de identificar ou tornar identificável o usuário que visita, entra em contato e navega no site, se cadastra na plataforma e contrata os serviços oferecidos pela BCX.</p>
            
            <h5>2. ACEITE</h5>
            <p>2.1 Ao manifestar o “Aceite” a esta Política de Privacidade, o usuário declara expressamente que leu e entendeu todos os direitos e obrigações aqui determinados.</p>
            <p>2.2 Caso não concorde com os termos desta Política, ainda que parcialmente, o usuário pode não a aceitar, mas deve estar ciente que alguns serviços não poderão ser prestados sem a coleta de determinadas informações e/ou dados pessoais.</p>

            <h5>3. COMO A BCX TRATA E PROTEGE OS DADOS PESSOAIS</h5>
            <p>3.1 Esta seção descreve as regras que serão observadas no tratamento dos dados pessoais pela BCX para atender os padrões de proteção de dados exigidos pela legislação e regulamentação vigentes.</p>
            <p>3.2 A BCX somente coleta, trata e mantém os dados pessoais e dados pessoais sensíveis que sejam estritamente necessários e quando o propósito/finalidade do tratamento se enquadre em uma das hipóteses legais permitidas, sendo certo que o usuário tem o direito de ser informado sobre a razão e a forma pela qual seus dados pessoais são coletados, tratados e mantidos durante todo o processo.</p>
            
            <h5>4. QUAIS DADOS COLETAMOS E PARA QUAIS FINALIDADES DE TRATAMENTO:</h5>
            <p>4.1 A BCX coleta e trata dados pessoais e/ou dados pessoais sensíveis para alcançar as seguintes finalidades:</p>
            <p>a) Ao se cadastrar na plataforma do SITE e solicitar a abertura de conta, bem como para validação dos dados pessoais fornecidos e cumprimento das disposições da Instrução Normativa nº 1888 da RFB, são coletados e processados os seguintes dados pessoais: e-mail, CPF, data de nascimento, telefone, endereço completo;</p>
            <p>b) Quando o cliente pretenda realizar transações até R$ 200.000,00, a BCX solicitará o envio de cópias de documentos e processará os dados pessoais e dados sensíveis neles inseridos: Cópia do documento de identificação com foto (RG, CNH ou RNE), cópia do comprovante de endereço, e, estando o comprovante em nome de terceiro, é solicitada cópia do comprovante de vínculo (certidão de nascimento, casamento ou contrato de locação devidamente registrado em cartório), e selfie;</p>
            <p>c) Para clientes que pretendam realizar transações acima de R$ 200.000,00, a BCX solicitará, além dos documentos descritos no item b), o envio dos seguintes documentos: Declaração de Imposto de Renda e Recibo de Entrega. Poderão ser solicitados documentos adicionais, como: holerites, contratos de compra e venda, extratos bancários, dentre outros capazes de comprovar a capacidade financeira do investidor. Todos os dados pessoais e dados sensíveis inseridos nos documentos citados neste item serão processados nos termos dessa Política de Privacidade;</p>
            <p>A BCX NÃO COLETA OU SOLICITA INTENCIONALMENTE DADOS PESSOAIS DE MENORES DE 18 (DEZOITO) ANOS. NO ENTANTO, OS DOCUMENTOS FORNECIDOS NESTE ITEM SÃO INDISPENSÁVEIS PARA A COMPROVAÇÃO DE ORIGEM DOS RECURSOS TRANSACIONADOS NA PLATAFORMA E PODEM CONTER DADOS DE CRIANÇAS E/OU ADOLESCENTES. NESTE CASO, VOCÊ, COMO UM DOS PAIS OU RESPONSÁVEL LEGAL DO MENOR, AO ACEITAR ESTA POLÍTICA, CONSENTE COM O TRATAMENTO DOS RESPECTIVOS DADOS PESSOAIS PARA A PRESTAÇÃO DO SERVIÇO CONTRATADO POR VOCÊ.</p>
            <p>d) Para clientes Pessoa Jurídica, serão processados dados pessoais e dados sensíveis de cada um dos sócios, tais como: documento de identificação com foto (RG, CNH ou RNE), comprovante de endereço e selfie, além do contrato social devidamente assinado e alterações contratuais caso hajam;</p>
            <p>e) Para abertura de conta para clientes Pessoa Física Estrangeira, validação de dados e cumprir as disposições da IN nº 1888 da RFB, são solicitados: documento de identificação com foto do país de origem e selfie;</p>
            <p>f) Para permitir que a BCX entre em contato com você e para permitir o atendimento de solicitações de suporte e solução de bugs, esclarecimentos de dúvidas ou reclamações dos usuários e visitantes enviadas voluntariamente via chat ou formulário de contato disponibilizados no site, e-mail, redes sociais ou por meio de sites de reclamações como o “Reclame Aqui” e permitir a solução da demanda, identificação do cadastro e o retorno do contato, são coletados: Nome, e-mail e telefone; eventualmente, se não for possível a localização do cadastro do usuário pelo e-mail, telefone ou nome, poderá ser solicitado o CPF; Para atender solicitações de estorno, serão coletados e processados, complementarmente: dados bancários e chave PIX;</p>
            <p>g) Para possibilitar o envio de e-mail marketing, newsletter, download de e-books ou outros materiais disponibilizados gratuitamente no SITE, divulgações de novos serviços e produtos indicados para o seu perfil, são coletados e tratados: Nome, telefone, e-mail e CPF;</p>
            <p>h) Na navegação pela Plataforma, sem qualquer interação direta conosco, por meio de uso de tecnologias diversas, a BCX poderá coletar informações tais como informações sobre o navegador e o dispositivo que você está usando, seu endereço IP, sua localização, o endereço do site a partir do qual você chegou e forma de navegação dentro da nossa Plataforma (“Dados de Navegação”). Algumas dessas informações são coletadas usando ferramentas tecnológicas que incluem cookies, web beacons e links da web incorporados.</p>
            <p>h.1) O público em geral poderá navegar na Plataforma sem necessidade de qualquer cadastro e envio de Dados Pessoais, com exceção aos Dados de Navegação indicados acima. No entanto, algumas das funcionalidades da Plataforma poderão depender de prévio cadastro e envio de Dados Pessoais.</p>
            <p>i) Para permitir a emissão de notas fiscais dos serviços prestados pela BCX e recolher os impostos devidos em razão da nossa atividade, são tratados: Nome, CPF e endereço e endereço eletrônico caso haja.</p>
            <p>4.1.1 Os dados indicados nos itens acima serão coletados diretamente do usuário ou visitante, quando estes acessam e utilizam a plataforma e os serviços da BCX, quando realizam cadastros em formulários e/ou quando enviam voluntariamente via chat, e-mail ou redes sociais.</p>
            <p>4.2 Além das finalidades descritas nos itens acima, a BCX poderá tratar seus Dados Pessoais, para:</p>
            <p>a) Formar, manipular, fazer backup e garantir a segurança de nossos bancos de dados;</p>
            <p>b) Garantirmos a segurança da nossa operação e dos nossos usuários;</p>
            <p>c) Entender a sua experiência na Plataforma e aprimorar os serviços prestados, otimizando e personalizando sua experiência e relacionamento com a BCX;</p>
            <p>d) Confirmar e corrigir as informações do Usuário para validar o acesso à conta e aos serviços prestados, inclusive mediante métodos de autenticação (2FA), como via mensagem de texto (SMS) ou e-mail;</p>
            <p>e) Verificar autenticidade das informações e documentos fornecidos pelo usuário, bem como confirmar a sua identidade e a origem lícita dos recursos apostados na Plataforma;</p>
            <p>f) Detectar e prevenir fraudes ou a prática de quaisquer outros ilícitos;</p>
            <p>h) Permitir a defesa em processos administrativos ou judiciais interpostos contra a BCX;</p>
            <p>4.3 O usuário reconhece ser o único responsável pela veracidade, exatidão, autenticidade e legalidade dos Dados Pessoais e informações fornecidos diretamente por você, comprometendo-se, ainda, com a guarda, sigilo e boa utilização de eventual login e senha cadastrados, quando aplicável, isentando a BCX de qualquer responsabilidade nesse sentido.</p>
            
            <h5>5. QUAIS FUNDAMENTOS LEGAIS AUTORIZAM O TRATAMENTO DOS DADOS</h5>
            <p>5.1 O tratamento de dados pessoais e dados sensíveis é realizado de maneira compatível com as finalidades para as quais foram coletados, nos termos definidos nesta Política de Privacidade e não poderão ser tratados com propósitos diversos.</p>
            <p>5.2 Os usuários concordam que os dados serão tratados de acordo com os fundamentos legais abaixo:</p>
            <p>a) Para permitir a execução do contrato ou de procedimentos preliminares relacionados ao contrato e o cumprimento de todas as obrigações decorrentes da prestação dos serviços oferecidos pela BCX (artigo 7º, inciso II da LGPD);</p>
            <p>b) Para garantir a prevenção à fraude e a segurança do titular, nos processos de identificação e autenticação de cadastro em sistemas eletrônicos (artigo 11º, inciso II, alínea g) da LGPD);</p>
            <p>c) Para atender interesses legítimos do controlador ou de terceiros, para apoio e promoção de suas atividades ou para proteção, em relação ao titular, do exercício regular de seus direitos ou da prestação de serviços que o beneficiem (artigo 7º, inciso IX) da LGPD);</p>
            <p>d) Para permitir o cumprimento de obrigações legais ou regulatórias por parte da BCX (artigo 7ª, inciso II e artigo 11º, inciso II, alínea a), ambos da LGPD);</p>
            <p>e) Por meio do consentimento do Usuário, podendo este ser revogado a qualquer tempo (artigo 7º, inciso I e artigo 11º, inciso I, ambos da LGPD);</p>
            <p>f) Para permitir exercício regular de direitos, inclusive em contrato e em processo judicial, administrativo e arbitral (artigo 7º, inciso VI e artigo 11º, inciso II, alínea d), ambos da LGPD).</p>
            <p>5.3 A BCX esclarece que apenas trata dados pessoais e dados pessoais sensíveis na medida em que seja necessário para atingir as finalidades específicas definidas nesta Política e se estas estiverem de acordo com as bases legais acima.</p>
            <p>5.4 A BCX adota medidas para garantir que quaisquer dados em sua posse sejam mantidos precisos, atualizados em relação às finalidades para as quais foram coletados, sendo certo que é garantido ao usuário a possibilidade de requerer a exclusão ou correção de dados imprecisos ou desatualizados.</p>
            <p>5.5. A BCX adota medidas técnicas recomendadas, de acordo com seu porte e atividades desenvolvidas, para proteger os dados contra o tratamento não autorizado, ilegal ou em desacordo com o disposto nesta Política, bem como contra a perda acidental, destruição ou danos.</p>
            <p>5.6 Quando o tratamento dos dados não se enquadrar nas hipóteses legais acima, a BCX dará ciência ao usuário sobre o fundamento legal que autoriza o tratamento, ou quando não houver fundamento, deverá a BCX obter o consentimento, assegurando que este seja dado pelo usuário de forma específica, livre, inequívoca e informada.</p>

            <h5>6. TEMPO DE DURAÇÃO DO TRATAMENTO DOS DADOS</h5>
            <p>6.1 Os dados coletados serão tratados pelo tempo suficiente para atingir as finalidades definidas na cláusula 4 serão mantidos sob guarda da BCX durante todo período da prestação dos serviços ou até que seja revogado o consentimento, quando esta for a base legal aplicável.</p>
            <p>6.1.1 Após o encerramento da prestação dos serviços os dados poderão ser mantidos pelo prazo necessário para o cumprimento de obrigações legais e regulatórias aplicáveis à atividade da BCX ou, ainda, pelo prazo prescricional para o exercício regular dos seus direitos em ações judiciais, administrativa ou arbitrais.</p>

            <h5>7. COMO COMPARTILHAMOS SEUS DADOS PESSOAIS</h5>
            <p>7.1 Não divulgamos os seus Dados Pessoais a terceiros de maneira que seria considerada uma venda ou comercialização.</p>
            <p>7.2 A BCX apenas realiza a transmissão de dados do usuário a terceiros que tenham necessidade legítima para acessá-los e prestam serviços indispensáveis para otimizar a prestação dos serviços e atingir as finalidades definidas na cláusula 4, tais como:</p>
            <p>a) Com empresas que gerenciam os sistemas tecnológicos, servidores de e-mail, bases de dados e programas de gestão utilizados pela BCX no desenvolvimento da sua atividade;</p>
            <p>b) Com a Receita Federal ou outros órgãos governamentais, conforme o caso;</p>
            <p>c) Com empresas terceirizadas prestadoras de serviço de SaaS e BaaS;</p>
            <p>d) Bancos e Exchanges de Criptoativos;</p>
            <p>e) Prestadores de serviços de due diligence em processo de KYC.</p>
            <p>7.3 Os prestadores de serviços terceirizados que tratem os dados dos usuários estão sujeitos às obrigações e às responsabilidades impostas aos agentes de tratamento que atuam como Operadores, de acordo com a legislação e regulamentação de Proteção de Dados Pessoais aplicáveis.</p>
            <p>7.4 A BCX se compromete a verificar o nível de adequação dos seus prestadores de serviços e assegura que os contratos com eles firmados contenham as cláusulas de privacidade que exijam que o operador de dados implemente medidas de segurança, bem como controles técnicos e administrativos apropriados para garantir a confidencialidade e segurança dos dados e que especifiquem que o operador está autorizado a trata-los apenas quando estejam estritamente relacionados com às finalidade de coleta pré-definidas por esta Política de Privacidade.</p>

            <h5>8. TRANSFERÊNCIA INTERNACIONAL DOS DADOS</h5>
            <p>8.1 Via de regra, seus Dados Pessoais serão tratados e permanecerão armazenados no território brasileiro. Contudo, caso haja necessidade, poderemos transferir os seus dados pessoais para outros países como: Estados Unidos e países do Espaço Econômico Europeu, onde empresas parceiras ou prestadoras de serviço estão sediadas ou mantêm seus servidores de dados, servidores de e-mail e servidores de sistemas. Sendo necessária qualquer transferência nesse sentido, esta ocorrerá quando necessário para cumprimento das finalidades descritas nesta Política e nos Termos de Uso.</p>
            <p>8.2. A BCX garante que essas transferências internacionais serão realizadas apenas para países que tenham grau equivalente ou superior de proteção de dados em comparação ao Brasil, ou aplicará outros mecanismos legais para justificar esse uso compartilhado.</p>
            
            <h5>9. QUAIS SÃO OS SEUS DIREITOS</h5>
            <p>9.1 A BCX garante ao usuário o exercício dos direitos que lhe são conferidos nos termos da Lei Geral de Proteção de Dados (“LGPD – Lei 13.853/2019), sendo estes:</p>
            <p>a) Confirmação da existência de tratamento – o que é assegurado por meio desta Política de Privacidade;</p>
            <p>b) Direito de acesso – ou seja, o direito de solicitar o acesso aos seus dados pessoais e/ou dados sensíveis que processamos;</p>
            <p>c) Direito de retificação – o direito a solicitar que a BCX altere ou atualize os dados pessoais do usuário, sempre que estiverem incorretos ou incompletos;</p>
            <p>d) Direito à anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos – o direito de solicitar que sejam tornados anônimos seus dados, ou exigir sua eliminação quando forem desnecessários ou excessivos para a finalidade;</p>
            <p>e) Direito à portabilidade de dados – o direito de solicitar uma cópia dos seus dados pessoais em formato eletrônico para transmissão para utilização em serviços de terceiros;</p>
            <p>f) Direito à eliminação da informação – o direito a solicitar para apagar os seus dados pessoais;</p>
            <p>g) Direito à informação – o direito de saber com quais entidades – públicas ou privadas - a BCX compartilhou seus dados;</p>
            <p>h) Direito à revogação – o direito de revogar, a qualquer tempo, o consentimento para uso de dados;</p>
            <p>i) Direito à oposição – o direito do usuário se opor ao tratamento de dados pessoais que não esteja em alinhamento com as determinações da LGPD;</p>
            <p>j) Direito de petição – contra a BCX ou à Autoridade de Proteção de Dados aplicável, se o usuário tiver motivos para supor que qualquer um de seus direitos de proteção de dados pessoais tenha sido violado.</p>
            <p>9.2 Estes direitos poderão ser exercidos por meio de requerimento expresso do usuário enviado ao Encarregado de Proteção de Dados, através do endereço eletrônico disponibilizado na cláusula 13 desta Política, e serão atendidos, sempre que possível, imediatamente.</p>
            <p>9.3 Na hipótese de impossibilidade de resposta imediata ao requerimento, a BCX comunicará ao usuário que não é agente de tratamento de dados, devendo nesta hipótese indicar o agente, ou cientificá-lo das razões de fato e de direito que a impedem de atender ao requerimento imediatamente.</p>
            
            <h5>10. PADRÕES DE SEGURANÇA</h5>
            <p>10.1 A BCX está comprometida com a implementação dos padrões de Segurança da Informação e com a proteção de Dados Pessoais e Dados Sensíveis com vistas a garantir o direito fundamental do indivíduo à autodeterminação da informação, bem como a confidencialidade, a integridade e disponibilidade, a autenticidade, a responsabilidade e o não repúdio.</p>
            <p>10.2 Obrigação do Sigilo de Dados Pessoais</p>
            <p>10.2.1 Os colaboradores da BCX que tenham acesso a dados pessoais estão obrigados aos deveres de confidencialidade e de proteção de dados previsto nessa política, desde o seu ingresso na empresa.</p>
            <p>10.2.2 Operadores ou pessoas autorizadas que se utilizarem indevidamente de informações, ferindo esta Política de Privacidade, estarão sujeitos à responsabilização e às medidas legais cabíveis.</p>
            <p>10.3 Além das hipóteses previstas na cláusula 7, os dados coletados e as atividades registradas apenas poderão ser compartilhados:</p>
            <p>a) Com autoridades judiciais, administrativas ou governamentais competentes, sempre que houver determinação legal, requerimento, requisição ou ordem judicial, e, ainda, para instruir processos investigativos de cooperação internacional, conforme autorizado pela legislação vigente;</p>
            <p>b) De forma automática, em caso de movimentações societárias, como fusão, cisão, aquisição e incorporação.</p>
            <p>10.4 Privacidade de Dados Pessoais por Concepção e por Padrão</p>
            <p>10.4.1 Ao implementar novos processos, procedimentos ou sistemas que envolvam o tratamento de dados, a BCX deve adotar medidas para garantir que as regras de privacidade e proteção de dados sejam adotadas desde a fase de concepção até o lançamento/implantação destes projetos.</p>
            <p>10.4.2 O usuário tem conhecimento que sempre há risco no tráfego de informações da internet, porém, a BCX se compromete a utilizar os melhores padrões de mercado para proteger os dados de seus usuários, clientes, prestadores de serviços e parceiros.</p>
            <p>10.4.3 Links de hipertexto para outros sites e redes sociais: o site da BCX poderá, de tempos a tempos, conter links de hipertexto que redirecionará o usuário para sites de parceiros e anunciantes. Se o usuário clicar em um desses links para qualquer um desses sites, lembramos que cada site possui as suas próprias práticas de privacidade e que não somos responsáveis por essas políticas. Consulte as referidas políticas antes de enviar quaisquer dados pessoais para esses sites.</p>

            <h5>11. AUDITORIAS DE PROTEÇÃO DE DADOS</h5>
            <p>11.1 A BCX garante que realizará revisões periódicas a fim de confirmar que as iniciativas de privacidade, seus sistemas, medidas, processos, precauções e outras atividades incluindo o gerenciamento de proteção de dados, foram implementados e mantidos e estão em conformidade com a legislação e regulamentação aplicáveis.</p>

            <h5>12. DISPOSIÇÃO DOS DADOS PELO USUÁRIO</h5>
            <p>12.1 Os usuários serão sempre informados sobre os dados a serem coletados, ficando a seu critério fornecê-los ou não, bem como a sua exclusão posterior, e, em cada caso, serão avisados sobre as consequências de sua decisão.</p>
            <p>12.2 Os usuários garantem a veracidade e exatidão dos dados pessoais fornecidos à BCX, assumindo a correspondente responsabilidade caso estes não sejam exatos. Constitui ainda como responsabilidade dos usuários o dever de manter atualizados seus dados cadastrais, principalmente o e-mail, adotando as devidas cautelas para que os e-mails do site não sejam enviados para a caixa de lixo eletrônico.</p>
            <p>12.3 As informações pessoais fornecidas pelos usuários não serão divulgadas ao público.</p>

            <h5>13. CONTATO</h5>
            <p>13.1 Caso pretenda exercer qualquer um dos direitos previstos nesta Política de Privacidade e/ou nas Leis de Proteção de Dados, ou resolver quaisquer dúvidas relacionadas ao Tratamento de seus Dados Pessoais, favor contatar-nos por meio do e-mail: protecaodedados@bcxcorretora.com.br</p>

            <h5>14. DISPOSIÇÕES FINAIS</h5>
            <p>14.1 A BCX se reserva o direito de modificar a presente Política de Privacidade a qualquer tempo, observando a legislação aplicável, sendo o USUÁRIO comunicado de tais alterações que serão consideradas imediatamente aplicáveis, vigentes e vinculantes entre as partes.</p>
            <p>14.2 Esta Política deve ser interpretada segundo a legislação brasileira. Fica eleito o foro da Comarca de São Paulo para resolução de qualquer litígio ou controvérsia envolvendo este documento.</p>

            <br/>
            <p>DATA DA ÚLTIMA ATUALIZAÇÃO: 16/06/2023</p>
          </div>
        </div>
        
        <div className="modal-footer">
          <button className="btn-close" onClick={onClose}>
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

PrivacyPolicy.propTypes = {
    onClose: PropTypes.func.isRequired,
    isOpen: PropTypes.func.isRequired,
  };

export default PrivacyPolicy;
