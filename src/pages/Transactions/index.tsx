import { useEffect } from "react";
import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm";
import { Summary } from "../../components/Summary";
import { TransactionTable } from "../../components/TransactionTable";
import { TransactionContainer } from "./styles";

export function Transactions() {

  async function loadTransactions() {
    const response = await fetch('http://localhost:3000/transactions');
    const data = await response.json();

    console.log(data)
  }
  /** JSON Server HTTT Request */
  useEffect(() => { loadTransactions() }, [])


  return (
    <div>
      <Header />
      <Summary />
      <TransactionContainer>
        <SearchForm />
        <TransactionTable />
      </TransactionContainer>

    </div>
  )
}