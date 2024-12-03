import './TermsModal.css';
import PropTypes from 'prop-types';

const TermsModal = ({ isOpen, onClose }) => {
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
          <h4 className="modal-title">TERMOS DE USO BC COINS - EXCHANGE</h4>
          <div className="highlight-title"></div>
        </div>
        <div className="modal-body">
          <div className="terms-content">
            <p>
              <strong>BC COINS INTERMEDIADORA LTDA.</strong>, pessoa jurídica de direito privado, inscrita no CNPJ sob o nº 21.830.817/0001-67, situada na Avenida Osvaldo Reis, nº 3385, Sala 1407, Praia Brava de Itajaí, na cidade de Itajaí/SC, CEP nº 88.306-003, é a detentora de todos os direitos sobre e responsável pela plataforma online de intermediação de compra e venda de criptoativos “SERVIÇOS”, disponibilizada através do site hospedado sob o domínio www.bcxcorretora.com.br, denominada nestes TERMOS como “PLATAFORMA”.
            </p>
            <h5>1. Aceite</h5>
            <p>1.1. Antes de fazer uso dos SERVIÇOS oferecidos pela BC COINS, o USUÁRIO concorda em ler atentamente esses TERMOS, garantindo sua perfeita compreensão.</p>
            <p>1.2. O USUÁRIO, ao aceitar estes TERMOS, concorda com as disposições neles previstas, aceitando e vinculando-se a elas, bem como declara que está ciente de que os TERMOS poderão ser alterados ao longo do tempo, sendo sua responsabilidade a verificação periódica, principalmente antes de utilizar os SERVIÇOS da PLATAFORMA.</p>
            <p>1.2.2 Em caso de alterações, a BC COINS informará ao USUÁRIO na PLATAFORMA e/ou por e-mail. Para melhor comodidade do USUÁRIO, a data da última alteração consta ao final para fácil referência.</p>
            <p>1.3. Caso tenha alguma objeção a qualquer disposição destes TERMOS, inclusive posterior ao seu aceite, o USUÁRIO deverá cessar imediatamente o uso da PLATAFORMA, aplicando-se, durante o período que houver utilização – se houver, as regras aqui previstas.</p>
            <p>1.4. Para utilizar os SERVIÇOS da PLATAFORMA, o USUÁRIO deve ter conhecimento sobre o que são criptoativos, o mercado de criptoativos e ter considerado seu risco. O valor dos criptoativos pode variar no tempo e o USUÁRIO tem conhecimento dessa circunstância e a aceita por sua conta e risco, de forma consciente e informada.</p>
            <p>1.5. A PLATAFORMA presta os SERVIÇOS de intermediação de compra e venda de criptoativos, por isso, a responsabilidade pelas operações realizadas por seu intermédio é exclusivamente do USUÁRIO, não prestando a PLATAFORMA qualquer consultoria em investimentos.</p>
            <p>1.6. Não é permitida a utilização da PLATAFORMA por menores de 18 (dezoito) anos.</p>
            
            <h5>2. A PLATAFORMA</h5>
            <p>2.1. A BC COINS poderá atualizar a PLATAFORMA sempre que desejar, ou for necessário, bem como deixar de disponibilizá-la, atualizá-la ou mesmo descontinuá-la a qualquer tempo.</p>
            <p>2.2. Em caso de descontinuidade da PLATAFORMA, a BC COINS informará os USUÁRIOS com antecedência de 60 (sessenta) dias.</p>

            <h5>3. CADASTRO E IDENTIFICAÇÃO PESSOAL</h5>
            <p>3.1. Para utilização da PLATAFORMA é necessário realizar um cadastro e enviar a documentação mencionada na POLÍTICA DE KYC – PLD/F, a qual recomendamos a leitura, a fim de ter acesso aos SERVIÇOS da BC COINS.</p>
            <p>3.2. Após a conclusão do cadastro será criada uma conta para o USUÁRIO, que será acessada unicamente mediante login e senha, que são de uso pessoal e intransferível, sendo de responsabilidade do USUÁRIO sua utilização e guarda de forma segura, responsável e de boa fé.</p>
            <p>3.2.1 A BC COINS não terá responsabilidade por eventual mau uso por parte do USUÁRIO ou de terceiros, por sua falha de segurança, bem como por eventuais ataques que o USUÁRIO venha a sofrer;</p>
            <p>3.2.2 Para dar mais segurança a sua conta, o USUÁRIO poderá ativar o mecanismo fornecido pela BC COINS por meio do segundo fator de Autenticação (2FA).</p>
            <p>3.3. Cada USUÁRIO poderá manter apenas uma conta na PLATAFORMA. Caso a BC COINS detecte a existência de mais de uma conta em nome do mesmo USUÁRIO, poderá suspender uma ou todas as contas, temporária ou definitivamente, ou até mesmo cancelar as contas, mediante prévio aviso ao USUÁRIO.</p>
            <p>3.4. O USUÁRIO é totalmente responsável pelas informações que fornece, as quais serão tratadas e protegidas de acordo com a POLÍTICA DE PRIVACIDADE. Se constatada irregularidade no preenchimento do cadastro, omissão de informações, dados equivocados ou preenchimento errôneo, a BC COINS poderá suspender o acesso do USUÁRIO à área do cadastro até que a situação se regularize, ou mesmo cancelar a conta.</p>
            <p>3.5. O cadastro é gratuito e é necessário que este seja validado pela BC COINS para que seja possível a utilização dos SERVIÇOS disponibilizados na PLATAFORMA. A BC COINS poderá realizar procedimentos de verificação dos dados e solicitar ao USUÁRIO o envio de documentos e informações adicionais, de acordo com sua POLÍTICA DE KYC – PLD/FT</p>
            <p>3.5.1 A validação do cadastro é liberalidade da BC COINS, que poderá recusar um cadastro sem precisar apresentar justificativa.</p>
            <p>3.6. O USUÁRIO aceita e concorda que toda e qualquer transação deve ser efetuada tão e somente pelo titular do cadastro.</p>


            <h5>4. FUNCIONAMENTO DA PLATAFORMA</h5>
            <p>4.1. A PLATAFORMA é destinada à intermediação de compra e venda de criptoativos entre USUÁRIOS, o que poderá ser realizado de duas formas, por meio de ORDENS DE COMPRA e VENDA privadas, por meio da ferramenta denominada “OTC”, ou públicas, chamada de “book”.</p>
            <p>4.1.1. Os criptoativos suportados pela PLATAFORMA estão listados no site da BCX , podendo ser acessados clicando aqui. A tentativa de envio/recebimento de criptoativos não suportados pode acarretar perdas irreversíveis que serão de responsabilidade do USUÁRIO.</p>
            <p>4.1.2. O USUÁRIO reconhece e aceita que, caso não haja aviso expresso da BC COINS em sentido distinto, a PLATAFORMA não suporta criptoativos derivados de processos conhecidos como “hard forks”.</p>
            <p>4.2. Os USUÁRIOS poderão fazer aportes em reais ou em criptoativos em suas contas na PLATAFORMA para realizarem suas transações.</p>
            <p>4.3. Os aportes dos USUÁRIOS em reais deverão ser feitos por meio de transferência bancária à BC COINS, de modo que não serão aceitos depósitos em dinheiro realizados de qualquer forma, especialmente aqueles feitos diretamente no caixa. Também não serão aceitas transferências provenientes de contas bancárias de titularidade de outras pessoas, físicas ou jurídicas, que não o USUÁRIO.</p>
            <p>4.3.1. Caso seja confirmada a tentativa de transferência à BC COINS por meio de depósito em dinheiro ou por meio de contas bancárias de terceiros que não o USUÁRIO, a BC COINS estornará o valor depositado, retendo, entretanto, a taxa de administração. O valor da taxa poderá ser consultado clicando aqui.</p>
            <p>4.3.2. Em caso de depósito em dinheiro, não identificado, a BC COINS fará a devolução do valor apenas mediante decisão judicial comprobatória da titularidade dos fundos.</p>
            <p>4.4. As transações relativas à compra e venda de criptoativos podem ser realizadas, respectivamente, por meio de ORDENS DE COMPRA e ORDENS DE VENDA privadas, via OTC, diretamente via book, diretamente na plataforma pelo preço de mercado e ou via nossa ferramenta de peer-to-peer(P2P Garantido).</p>
            <p>4.4.1. As ORDENS DE COMPRA e ORDENS DE VENDA privadas, devem ser realizadas sempre para USUÁRIOS já cadastrados e com KYC aprovado na plataforma e terão cotação e prazo de validade definido entre as partes, que poderão usar a ferramenta de chat para a negociação.</p>
            <p>4.4.1.1. As ORDENS DE COMPRA e ORDENS DE VENDA privadas, fora do book, somente poderão ser executadas em sua integralidade.</p>
            <p>4.4.2. Caso o USUÁRIO destinatário da ORDEM DE COMPRA ou ORDEM DE VENDA privada não concretize a ordem, a mesma será transferida para o book, passando a ser uma ordem pública.</p>
            <p>4.5. Fica aqui esclarecido que a negociação é realizada diretamente entre os USUÁRIOS, sem a interferência da BC COINS, que apenas oferece a PLATAFORMA para a negociação e liquidação das transações.</p>
            <p>4.6. Para realizar as transações de compra/venda na PLATAFORMA, os USUÁRIOS deverão ter saldo suficiente, em reais ou criptoativos, previamente depositados em suas contas na PLATAFORMA. Poderão ser estabelecidos limites para depósitos, saques e para transações diárias, de acordo com o perfil do USUÁRIO, consulte os limites mínimos e máximos da PLATAFORMA aqui.</p>
            <p>4.6.1 O saldo em reais/criptoativos correspondente às ORDENS DE COMPRA/VENDA ficará bloqueado na conta do USUÁRIO até que:</p>
            <p>a) a operação de compra/venda seja consumada e o referido saldo seja transferido para a conta do USUÁRIO vendedor/comprador; ou</p>
            <p>b) caso a ORDEM DE COMPRA/VENDA não tenha sido aceita e o USUÁRIO comprador/vendedor a cancele.</p>
            <p>4.6.2. Uma vez aceita a ORDEM DE VENDA por um USUÁRIO comprador, os criptoativos correspondentes serão transferidos da conta do USUÁRIO vendedor para a conta do USUÁRIO comprador. Após concluída, a operação de venda não poderá ser desfeita ou modificada. Assim, o cancelamento de uma ORDEM DE COMPRA/VENDA só pode realizado antes de seu aceite por outro USUÁRIO.</p>
            <p>4.6.3. As ordens públicas registradas por USUÁRIOS poderão ser aceitas por outros USUÁRIOS de forma total ou parcial. Caso uma ORDEM seja parcialmente aceita, o USUÁRIO vendedor poderá:</p>
            <p>a) cancelar a ORDEM; ou</p>
            <p>b) manter a ORDEM vigente e esperar que outros USUÁRIOS aceitem os criptoativos remanescentes pelo mesmo preço fixado na ORDEM.</p>
            <p>4.6.4. É vedado emitir mais de uma ORDEM DE VENDA simultaneamente para a mesma quantidade de criptoativos.</p>
            <p>4.7. A BC COINS poderá, a seu exclusivo critério, fixar limites de aportes e transações de USUÁRIOS, bem como alterá-los a qualquer momento, conforme parâmetros definidos pela BC COINS e mediante aviso prévio aos USUÁRIOS.</p>
            <p>4.8. Para realizar saques de reais ou criptoativos da PLATAFORMA, o USUÁRIO deverá ter o saldo correspondente em sua conta e selecionar a conta corrente de sua titularidade ou endereço de wallet de sua titularidade, sendo totalmente responsável por essas informações. O valor do saque ficará bloqueado até que o saque seja consumado, no prazo máximo de 7 dias úteis dias para reais e criptoativos, ressalvado o prazo específico da rede Blockchain subjacente de cada criptoativo.</p>
            <p>4.8.1. Para realizar transações o USUÁRIO deverá ter saldo suficiente para pagar as taxas relativas às transações, que estão no link xxxxx, e que serão debitadas do saldo do USUÁRIO, em Reais ou em criptoativos, a critério da PLATAFORMA.</p>
            <p>4.9. O USUÁRIO se compromete a não utilizar a PLATAFORMA para infringir a legislação, nem praticar lavagem de dinheiro, financiamento de atividades e/ou organizações que envolvam terrorismo, tráfico de drogas, pessoas e/ou órgãos humanos.</p>
            <p>4.10. A BC COINS presta serviços de intermediação de compra e venda de criptoativos. Em se tratando de um segmento de risco, em nenhum momento a BC COINS poderá ser considerada como responsável por quaisquer perdas, danos, prejuízos e/ou lucros cessantes que possam eventualmente ser sofridos pelos USUÁRIOS devido às transações realizadas com criptoativos por meio da PLATAFORMA.</p>
            <p>4.11. A BC COINS não é uma consultoria de investimentos, tampouco os SERVIÇOS que presta implicam em qualquer tipo de consultoria sobre investimentos em criptoativos, sendo que o USUÁRIO o faz por sua conta e risco. A BC COINS sugere que seus USUÁRIOS se informem sobre o funcionamento desse segmento, sua valorização e oscilação, antes de utilizar os SERVIÇOS da PLATAFORMA.</p>
            <p>4.12. O horário para o processamento das transações bancárias solicitadas é entre 9:00 e 17:00 horas (horário bancário), de segunda à sexta, exceto feriados. Já as transações de criptoativos podem ser realizadas pelos USUÁRIOS, mediante posse de saldo, a qualquer momento através da PLATAFORMA.</p>
            <p>4.13. Sobre os SERVIÇOS serão cobradas tarifas e comissão de acordo com a tabela disponibilizada na página: Conforme nossa tabela disponível no site, que poderá ser acessada clicando aqui.aqui.</p>
          
            <h5>5. SUPORTE</h5>
            <p>5.1. O suporte se limita a esclarecimentos acerca do funcionamento da PLATAFORMA e sobre os SERVIÇOS oferecidos, pressupondo o conhecimento por parte do USUÁRIO do uso do computador e suas funções, bem como do sistema operacional sob o qual o sistema será utilizado. Pressupõe-se ainda a configuração adequada do computador e dispositivo móvel no que se refere à utilização da PLATAFORMA e o bom estado de funcionamento do referido computador.</p>
            <p>5.2. O suporte fará atendimento ao USUÁRIO, nos dias úteis, entre das 8h às 19hrs por meio do formulário de contato ou do chat online disponibilizados na PLATAFORMA, sendo que a BC COINS se compromete a fornecer uma resposta em em até 7 dias úteis, contados do chamado realizado pelo USUÁRIO.</p>
            <p>5.3. O Suporte fornecido pela BC COINS não abrange questões como conexão com a internet, rede interna e computadores/dispositivos móveis do USUÁRIO.</p>

            <h5>6. PROPRIEDADE INTELECTUAL</h5>
            <p>6.1. Todos os direitos de propriedade intelectual referente à PLATAFORMA pertencem à BC COINS, sendo concedido ao USUÁRIO apenas o direito limitado de uso da interface para usufruto dos SERVIÇOS por ela disponibilizados.</p>
            <p>6.2. A PLATAFORMA poderá ser aperfeiçoado, podendo inclusive ocorrer suspensão temporária do serviço em virtude disso. O USUÁRIO desde já, concorda com modificações, implementação de novos recursos, ferramentas, melhorias ou correções na PLATAFORMA e que estas continuarão sendo também de propriedade única e exclusiva da BC COINS.</p>
            <p>6.3. É proibida a utilização indevida de quaisquer conteúdo ou marcas da BC COINS.</p>

            <h5>7. LIMITAÇÃO DE RESPONSABILIDADE</h5>
            <p>7.1. A BC COINS envidará todos os esforços na prestação dos SERVIÇOS, no entanto, não poderá ser responsabilizada por:<br/>

(i) qualquer defeito decorrente de culpa exclusiva do USUÁRIO;<br/>
(ii) integração da PLATAFORMA com qualquer outro software de terceiros ou do USUÁRIO;<br/>
(iii) danos ou prejuízos decorrentes de decisões administrativas, gerenciais ou comerciais tomadas pelo USUÁRIO com base nas informações fornecidas pela PLATAFORMA;<br/>
(iv) problemas na rede física e lógica do USUÁRIO;<br/>
(v) toda e qualquer responsabilidade por eventuais perdas e danos, lucros cessantes ou emergentes, cujas causas possam ser atribuídas, de forma direta ou indireta, ao fornecimento, utilização ou desempenho da PLATAFORMA, correção de bugs ou paradas de atualização;<br/>
(vi) eventos definidos na legislação civil como caso fortuito ou força maior;<br/>
(vii) uso perigoso e/ou inadequado da PLATAFORMA;<br/>
(viii) fatores de ordem técnica que impossibilitem a transferência de dados e/ou o download de informações da PLATAFORMA, nestes incluídos problemas de internet e<br/>
(ix) atrasos decorrentes do prazo de validação de transações nas redes Blockchain subjacentes.</p>
            <p>7.2. Em caso de suspeita de fraude ou qualquer outra atividade ilícita ou maliciosa (p.ex.: atividades suspeitas de manipulação de preços de mercado, na tentativa de forçar à subida ou queda dos preços, além dos valores de mercado, por foça de capital aportado na plataforma, bots maliciosos ou ação individual ou coletiva de grupos de usuários), a BC COINS poderá, além de recorrer às medidas legais cabíveis, no momento efetivo da rescisão, reter eventuais fundos do USUÁRIO até a conclusão das respectivas investigações ou mesmo encerrar a conta do USUÁRIO na plataforma.</p>
            <p>7.3. A BC COINS reserva para si o direito de negar a solicitação de compra e proceder a devolução do valor transferido por USUÁRIOS, bem como cancelar suas contas, em caso de indícios de, mas sem se limitar a:

a) fornecimento de informações falsas, imprecisas, incompletas ou enganosas;<br/>
b) indícios de fraude;<br/>
c) não fornecimento de informações e/ou documentos adicionais após 30 dias da solicitação, sem resposta do USUÁRIO;<br/>
d) má-fé;<br/>
e) violação de alguma das disposições destes TERMOS;<br/>
f) uso dos SERVIÇO em desacordo com a legislação;<br/>
g) envolvimento em condutas fraudulentas ou ilegais;</p>

            <h5>8. CONSIDERAÇÕES FINAIS</h5>
            <p>8.1. O USUÁRIO poderá, a qualquer momento, solicitar o cancelamento da sua conta. Para tanto, todo e qualquer saldo, seja em reais ou em criptoativos, deverá ser transferido para outra conta a ser informada pelo USUÁRIO. Nesse caso, apenas as informações de guarda obrigatória serão mantidas pela BC COINS, pelo tempo exigido por lei.</p>
            <p>8.2. Em caso de suspensão da conta por suspeita de fraude ou ilegalidade, os saldos poderão ser bloqueados, sem prejuízo da adoção de medidas legais cabíveis.</p>
            <p>8.3. A incapacidade ou a mera liberalidade em não fazer cumprir quaisquer disposições destes TERMOS não constitui renúncia de direitos, podendo ser exigido o seu cumprimento em qualquer momento.</p>
            <p>8.4. Caso qualquer disposição destes TERMOS seja considerada inexequível ou inválida, essa disposição será isoladamente invalidada e não atingirá o restante das disposições.</p>
            <p>8.5. Estes TERMOS e a relação entre as Partes serão regidos pelas leis da República Federativa do Brasil, principalmente o Código Civil e o Código de Defesa do Consumidor.</p>
            <p>8.6. As Partes elegem o Foro da Comarca de São Paulo como sendo o único competente para dirimir quaisquer litígios e/ou demandas que venham a envolver as Partes em relação ao SERVIÇO.</p>
            <br/>
            <p>DATA DA ÚLTIMA ATUALIZAÇÃO: 02/08/2023</p>
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

TermsModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    isOpen: PropTypes.func.isRequired,
  };

export default TermsModal;
