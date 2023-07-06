/** Criação de um hook abstrai a parte logica de um componte, deixando o código mais limpo e de facil manutenção */

import { useContext } from "react";
import { TransactionContext } from "../contexts/TransactionsContext";



export function useSummary() {

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
  return summary
}