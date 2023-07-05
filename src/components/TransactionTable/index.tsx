import { PriceHighlight, Table, TableContainer } from "./styles";

export function TransactionTable() {
  return (
    <TableContainer>
      <Table>
        <tbody>
          <tr>
            <td width="50%">Desenvolvimento de Site</td>
            <td>
              <PriceHighlight variant="income">R$ 12.000,00</PriceHighlight>
            </td>
            <td>Venda</td>
            <td>13/04/22</td>
          </tr>
          <tr>
            <td width="50%">Hamburguer</td>
            <td>
              <PriceHighlight variant="outcome">-R$ 59,00</PriceHighlight>
            </td>
            <td>Alimentação</td>
            <td>10/04/22</td>
          </tr>
          <tr>
            <td width="50%">Aluguel do apartamento</td>
            <td>
              <PriceHighlight variant="outcome">-R$ 1200,00</PriceHighlight>
            </td>
            <td>Casa</td>
            <td>27/03/22</td>
          </tr>
        </tbody>
      </Table>
    </TableContainer>
  )
}