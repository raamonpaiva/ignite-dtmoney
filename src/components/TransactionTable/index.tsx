import { useContextSelector } from 'use-context-selector'
import { TransactionContext } from '../../contexts/TransactionsContext'
import { dateFormatter, priceFormater } from '../../utils/formatter'
import { PriceHighlight, Table } from './styles'

export function TransactionTable() {
  const transactions = useContextSelector(TransactionContext, (context) => {
    return context.transactions
  })

  return (
    <Table>
      <tbody>
        {transactions.map((transaction) => {
          return (
            <tr key={transaction.id}>
              <td width="50%">{transaction.description}</td>
              <td>
                <PriceHighlight variant={transaction.type}>
                  {/** Adiciona sinal + ou - dependendo da operação */}
                  {transaction.type === 'outcome' && '- '}
                  {priceFormater.format(transaction.price)}
                </PriceHighlight>
              </td>
              <td>{transaction.category}</td>
              <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
            </tr>
          )
        })}
      </tbody>
    </Table>
  )
}
