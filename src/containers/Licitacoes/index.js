import React from 'react'
import { useNavigate } from 'react-router-dom'

import {
  Container,
  DivStart,
  DivBody,
  DivConceito,
  DivTextosPrincipios,
  DivPrincipios,
  DivModalidddes,
  DivProcedimentos,
  DivQuestoes,
  DivItem,
  ButtonStart,
  ButtonResposta,
  ButtonAsk
} from './styles'

function Licitacoes() {
  const navigate = useNavigate()

  return (
    <Container>
      <DivStart>
        <div></div>
        <h1>Licitações</h1>
        <div>
          <ButtonStart onClick={() => navigate('/')}>Inicio</ButtonStart>
        </div>
      </DivStart>

      <DivBody>
        <DivConceito>
          <h1>Conceito</h1>

          <p>
            A licitação é um procedimento administrativo utilizado pela
            Administração Pública para contratar serviços, adquirir produtos ou
            realizar obras. Este processo busca garantir a seleção da proposta
            mais vantajosa para a administração, de forma transparente e
            competitiva.
          </p>
        </DivConceito>

        <DivPrincipios>
          <h1>Principios</h1>
          <DivTextosPrincipios>
            <p>
              Legalidade: Todos os atos devem estar de acordo com a legislação
              vigente.
            </p>
            <p>Isonomia: Igualdade de condições entre os participantes.</p>
            <p>
              Publicidade: Garantia de ampla divulgação do processo licitatório.
            </p>
            <p>Impessoalidade: Atuação sem favorecimentos ou discriminações.</p>
            <p>Probidade: Honestidade e ética na condução do procedimento.</p>
            <p>
              Vinculação ao Instrumento Convocatório: Respeito às regras
              estabelecidas no edital.
            </p>
          </DivTextosPrincipios>
        </DivPrincipios>

        <DivModalidddes>
          <h1>Modalidades</h1>
          <div>
            <p>
              Concorrência: Utilizada para obras e serviços de grande vulto.
            </p>
            <p>Tomada de Preços: Para obras e serviços de médio valor.</p>
            <p>Convite: Para obras e serviços de pequeno valor.</p>
            <p>
              Concurso: Utilizada para escolha de trabalhos técnicos,
              científicos ou artísticos.
            </p>
            <p>
              Leilão: Utilizada para alienação de bens móveis inservíveis para a
              Administração.
            </p>
            <p>Pregão: Utilizada para aquisição de bens e serviços comuns.</p>
          </div>
        </DivModalidddes>

        <DivProcedimentos>
          <h1>Procedimento</h1>
          <div>
            <p>Abertura da Licitação: Divulgação do edital.</p>
            <p>Credenciamento dos Participantes: Verificação da habilitação.</p>
            <p>
              Recebimento e Abertura das Propostas: Análise das propostas
              apresentadas.
            </p>
            <p>
              Julgamento e Habilitação: Seleção da proposta mais vantajosa e
              habilitação dos concorrentes.
            </p>
            <p>
              Adjudicação: Ato de atribuição do objeto da licitação ao vencedor.
            </p>
            <p>Homologação: Aprovação final do procedimento.</p>
          </div>
        </DivProcedimentos>

        <DivQuestoes>
          <h1>Questões</h1>

          <details>
            <ButtonAsk>Questão 1</ButtonAsk>
            <ul>
              Com vistas a promover a prática de atividades físicas, esportivas,
              educativas e de lazer para a comunidade em geral, certo Município
              visa a realizar uma licitação para a escolha de um projeto técnico
              voltado à revitalização de uma área, a fim de transformá-la em um
              centro poliesportivo que promova as mencionadas finalidades,
              mediante pagamento de prêmio para o respectivo vencedor.
              Paralelamente, o ente federativo almeja realizar também o
              procedimento pertinente para a aquisição do material necessário
              para a realização de esportes, bens comuns, a fim de melhor
              aparelhar a escolas públicas para incentivar tais práticas. Diante
              desta situação hipotética, as modalidades de licitação que deverão
              ser utilizadas são, respectivamente
            </ul>
            <DivItem>
              <p>A a concorrência e o leilão. </p>
              <p>B o diálogo competitivo e a concorrência. </p>
              <p>C o pregão e a diálogo competitivo. </p>
              <p>D o concurso e o pregão. </p>
              <p>E o leilão e o concurso. </p>

              <details>
                <ButtonResposta>Resposta</ButtonResposta>
                <ul style={{ fontWeight: 'bold', marginBottom: 10 }}>Item D</ul>
                <ul style={{ fontStyle: 'italic' }}>
                  Pregão: O pregão é um procedimento de licitação voltado
                  principalmente para a aquisição de bens e serviços comuns,
                  caracterizados pela padronização e ampla oferta no mercado. É
                  conduzido de forma mais ágil e simplificada em comparação com
                  outras modalidades de licitação, visando a eficiência e a
                  economia processual. No pregão, as propostas são apresentadas
                  de forma oral e os licitantes têm a oportunidade de oferecer
                  lances sucessivos em sessão pública, possibilitando uma
                  disputa direta e transparente. O critério de julgamento é o
                  menor preço ou o maior desconto, conforme o caso, sendo que o
                  licitante que oferecer a melhor condição para a Administração
                  é declarado vencedor. Artigos relevantes sobre o pregão: Lei
                  nº 10.520/02 (Lei do Pregão): Disposições gerais sobre o
                  pregão eletrônico e presencial. Decreto nº 5.450/05:
                  Regulamentação do pregão eletrônico. Decreto nº 3.555/00:
                  Regulamentação do pregão presencial.
                </ul>
              </details>
            </DivItem>
          </details>

          <details>
            <ButtonAsk>Questão 2</ButtonAsk>
            <ul>
              Na situação em que o licitante vencedor não aceitar a contratação
              nos termos apresentados, a Administração deverá:
            </ul>
            <DivItem>
              <p>A cancelar o processo licitatório. </p>
              <p>
                B convocar os licitantes para negociação desde que o valor seja
                no máximo igual ao da Administração.{' '}
              </p>
              <p>
                C adjudicar e celebrar o contrato a outro licitante, desde que
                aceite as condições da Administração.{' '}
              </p>
              <p>
                D aplicar as penalidades legalmente previstas ao licitante
                vencedor que se recusar em assinar o contrato sem justificativa.{' '}
              </p>
              <p>
                E realizar um novo certame sem a participação do licitante que
                se recusou a assinar o contrato.{' '}
              </p>

              <details>
                <ButtonResposta>Resposta</ButtonResposta>
                <ul style={{ fontWeight: 'bold', marginBottom: 10 }}>Item D</ul>
                <ul style={{ fontStyle: 'italic' }}>
                  Aplicar penalidades ao licitante vencedor que se recusa a
                  assinar o contrato sem justificativa é uma medida de
                  responsabilização prevista em lei para garantir a lisura e o
                  cumprimento das regras estabelecidas no processo licitatório.
                  Essas penalidades podem variar de acordo com a legislação
                  aplicável e as cláusulas do edital, podendo incluir multas,
                  suspensão temporária de participação em novos certames, ou até
                  mesmo a declaração de inidoneidade para contratar com a
                  Administração Pública. Essa medida visa desencorajar
                  comportamentos inadequados por parte dos licitantes,
                  promovendo a transparência, a eficiência e a legalidade nos
                  processos de contratação pública.
                </ul>
              </details>
            </DivItem>
          </details>

          <details>
            <ButtonAsk>Questão 3</ButtonAsk>
            <ul>
              Conforme disposto na Lei, a vedação à designiação de agente
              público para atuação simultânea em funções mais suscetiveis a
              riscos, de modo a reduzir a possibilidade de ocultação de erros e
              de ocorrência de fraudes na respectiva contratação, refere-se ao
              princípio
            </ul>
            <DivItem>
              <p>A cancelar o processo licitatório. </p>
              <p>
                B convocar os licitantes para negociação desde que o valor seja
                no máximo igual ao da Administração.{' '}
              </p>
              <p>
                C adjudicar e celebrar o contrato a outro licitante, desde que
                aceite as condições da Administração.{' '}
              </p>
              <p>
                D aplicar as penalidades legalmente previstas ao licitante
                vencedor que se recusar em assinar o contrato sem justificativa.{' '}
              </p>
              <p>
                E realizar um novo certame sem a participação do licitante que
                se recusou a assinar o contrato.{' '}
              </p>

              <details>
                <ButtonResposta>Resposta</ButtonResposta>
                <ul style={{ fontWeight: 'bold', marginBottom: 10 }}>Item A</ul>
                <ul style={{ fontStyle: 'italic' }}>
                  O princípio da segregação de funções é um conceito fundamental
                  na governança corporativa e na administração pública. Ele
                  estabelece a necessidade de separação e distribuição das
                  responsabilidades e atividades entre diferentes indivíduos ou
                  áreas dentro de uma organização, com o objetivo de mitigar
                  riscos, evitar fraudes e assegurar a transparência e a
                  integridade dos processos. Resumidamente, esse princípio
                  implica que funções distintas, como autorização, execução,
                  registro e fiscalização, devem ser desempenhadas por pessoas
                  ou departamentos diferentes, de modo que uma mesma pessoa não
                  tenha controle total sobre um processo ou transação. Isso
                  reduz a possibilidade de manipulação indevida de informações
                  ou recursos, garantindo maior controle e accountability. Por
                  exemplo, em uma instituição financeira, a pessoa responsável
                  por autorizar pagamentos não deve ser a mesma que realiza a
                  reconciliação das contas ou que tem acesso direto aos recursos
                  financeiros. No setor público, um servidor que emite uma ordem
                  de compra não deve ser o mesmo que aprova o pagamento da
                  fatura relacionada. A segregação de funções promove a
                  prestação de contas, a transparência e a eficiência
                  operacional, além de fortalecer a governança e a confiança nas
                  instituições. É um princípio essencial para prevenir conflitos
                  de interesse e fraudes, contribuindo para a sustentabilidade e
                  a credibilidade das organizações.
                </ul>
              </details>
            </DivItem>
          </details>
        </DivQuestoes>
      </DivBody>
    </Container>
  )
}

export default Licitacoes
