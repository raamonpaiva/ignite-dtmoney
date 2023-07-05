import { css, styled } from "styled-components";

export const SummaryContainer = styled.section`
  width: 100%;
  /** Se a tela tiver menos que 1120px o conteúdo do header vai ter 100% da telam se tiver mais ele limita em 1120 */
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: grid;
  /** 3 colunas(cards) com o mesmo tamanho e mesmo conteudo */
  grid-template-columns: repeat(3,1fr);
  gap: 2rem;

  /** margin top negativa é pra jogar o summary por cima do header */
  margin-top: -5rem;
`;

/** Interface que muda a cor do último card */
interface SummaryCardProps {
  variant?: 'green'
}

export const SummaryCard = styled.div<SummaryCardProps>`
  background: ${props => props.theme["gray-600"]};
  border-radius: 6px;
  padding: 2rem;

  header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${props => props.theme["gray-300"]}
  }

  strong{
    display: block;
    margin: 1rem;
    font-size: 2rem;
  }

  ${props => props.variant === 'green' && css`
    background: ${props.theme["green-700"]};
  `}
`;