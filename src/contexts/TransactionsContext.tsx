import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/axios'

// Adicionando a Tipagem para a transação
interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

interface CreateTransactionInput {
  description: string
  price: number
  category: string
  type: 'income' | 'outcome'
}

// Interface para Transactions
interface TransactionContextType {
  transactions: Transaction[]
  fetchTransactions: (query?: string) => Promise<void>
  createTransaction: (data: CreateTransactionInput) => Promise<void>
}

// Tipagem do children
interface TransactionProviderProps {
  children: ReactNode
}

// Criando o Contexto
export const TransactionContext = createContext({} as TransactionContextType)

// Criando o Context.Provider que vai envolver os componentes que vão herdar as props do contexto.
export function TransactionsProvider({ children }: TransactionProviderProps) {
  /** State é a forma como armazenar as informaçoes e estas serem utilizadas pela interface */
  const [transactions, setTransactions] = useState<Transaction[]>([])

  /** JSON Server HTTT Request */
  async function fetchTransactions(query?: string) {
    const response = await api.get('transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    })

    setTransactions(response.data)
  }

  async function createTransaction(data: CreateTransactionInput) {
    const { description, price, category, type } = data

    const response = await api.post('transactions', {
      description,
      price,
      category,
      type,
      createdAt: new Date(),
    })

    setTransactions((state) => [...state, response.data])
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TransactionContext.Provider
      value={{ transactions, fetchTransactions, createTransaction }}
    >
      {children}
    </TransactionContext.Provider>
  )
}
