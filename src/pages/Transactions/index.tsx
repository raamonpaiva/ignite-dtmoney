import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm";
import { Summary } from "../../components/Summary";
import { TransactionTable } from "../../components/TransactionTable";
import { TransactionContainer } from "./styles";



export function Transactions() {

  return (
    <div>
      <Header />
      <Summary />
      <TransactionContainer>
        <SearchForm />
        <TransactionTable/>
      </TransactionContainer>

    </div>
  )
}