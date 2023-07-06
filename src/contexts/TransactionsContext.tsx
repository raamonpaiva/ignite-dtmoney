import { createContext, ReactNode, useEffect, useState } from "react";

// Adicionando a Tipagem para a transação
interface Transaction {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  price: number;
  category: string;
  createdAt: string;

}
// Interface para Transactions
interface TransactionContextType {
  transactions: Transaction[];
  fetchTransactions: (query?: string) => Promise<void>
}

//Tipagem do children
interface TransactionProviderProps {
  children: ReactNode;
}

//Criando o Contexto
export const TransactionContext = createContext({} as TransactionContextType)

//Criando o Context.Provider que vai envolver os componentes que vão herdar as props do contexto.
export function TransactionsProvider({ children }: TransactionProviderProps) {


  /** State é a forma como armazenar as informaçoes e estas serem utilizadas pela interface */
  const [transactions, setTransactions] = useState<Transaction[]>([])

  /** JSON Server HTTT Request */
  async function fetchTransactions(query?: string) {

    const url = new URL('http://localhost:3000/transactions');

    if (query) {
      url.searchParams.append('q', query)
    }

    const response = await fetch(url);
    const data = await response.json();

    setTransactions(data);
  }

  useEffect(() => { fetchTransactions() }, [])


  return (
    <TransactionContext.Provider value={{ transactions, fetchTransactions }}>
      {children}
    </TransactionContext.Provider>
  )
}