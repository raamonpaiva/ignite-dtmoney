import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { useContext } from "react";
import { TransactionContext } from "../../contexts/TransactionsContext";
import { priceFormater } from "../../utils/formatter";
import { SummaryCard, SummaryContainer } from "./styles";

export function Summary() {

  const { transactions } = useContext(TransactionContext)


  /**Converte transactions para um objeto, onde o ultimo parametro é o formato desejado para apresentação dos dados */
  const summary = transactions.reduce(
    (acumulator, transaction) => {
      /** A cada iteração ele faz o somatorio to total dependendo da operação escolhida */
      if (transaction.type === 'income') {
        acumulator.income += transaction.price;
        acumulator.total += transaction.price
      } else {
        acumulator.outcome += transaction.price
        acumulator.total -= transaction.price
      }

      return acumulator
    },
    {
      income: 0,
      outcome: 0,
      total: 0
    })

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>

        <strong>{priceFormater.format(summary.income)}</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>

        <strong>{priceFormater.format(summary.outcome)}</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>

        <strong>{priceFormater.format(summary.total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}