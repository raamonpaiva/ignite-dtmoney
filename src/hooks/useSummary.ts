/** Criação de um hook abstrai a parte logica de um componte, deixando o código mais limpo e de facil manutenção */

import { useMemo } from 'react'
import { useContextSelector } from 'use-context-selector'
import { TransactionContext } from '../contexts/TransactionsContext'

export function useSummary() {
  const transactions = useContextSelector(TransactionContext, (context) => {
    return context.transactions
  })

  /** Converte transactions para um objeto, onde o ultimo parametro é o formato desejado para apresentação dos dados */
  const summary = useMemo(() => {
    return transactions.reduce(
      (acumulator, transaction) => {
        /** A cada iteração ele faz o somatorio to total dependendo da operação escolhida */
        if (transaction.type === 'income') {
          acumulator.income += transaction.price
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
        total: 0,
      },
    )
  }, [transactions])
  return summary
}
