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
                  Conforme disposto na Lei, a vedação à designiação de agente
                  público para atuação simultânea em funções mais suscetiveis a
                  riscos, de modo a reduzir a possibilidade de ocultação de
                  erros e de ocorrência de fraudes na respectiva contratação,
                  refere-se ao princípio
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
