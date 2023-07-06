import { useContext } from "react";
import { TransactionContext } from "../../contexts/TransactionsContext";
import { PriceHighlight, Table } from "./styles";

export function TransactionTable() {

  const { transactions } = useContext(TransactionContext)


  return (
    <Table>
      <tbody>
        {transactions.map(transaction => {
          return (
            <tr key={transaction.id}>
              <td width="50%">{transaction.description}</td>
              <td>
                <PriceHighlight variant={transaction.type}>{transaction.price}</PriceHighlight>
              </td>
              <td>{transaction.category}</td>
              <td>{transaction.createdAt}</td>
            </tr>
          )
        })}
      </tbody>
    </Table>

  )
}