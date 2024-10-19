import { useEffect, useState } from 'react';
import Table from '../Table/Table';
import type { Transaction } from '../types';

interface FetchState {
  transactions: Transaction[];
  loading: boolean;
  error: string | null;
}

const Transactions = () => {
    const [fetchState, setFetchState] = useState<FetchState>({
      transactions: [],
      loading: true,
      error: null
    })
  
    const fetchTransactions = async () => {
      try {
        const response = await fetch('https://tip-transactions.vercel.app/api/transactions?page=1 ');
        
        if (!response.ok) {
          throw new Error('Error retrieving transactions')
        }
        
        const result = await response.json();
        setFetchState({ transactions: result.transactions, loading: false, error: null });
      } catch (err) {
        if (err instanceof Error) {
          setFetchState({ transactions: [], loading: false, error: err.message });
        } else {
          setFetchState({ transactions: [], loading: false, error: 'Unknown error occurred' });
        }
      }
    }
  
    useEffect(() => {
      fetchTransactions()
    }, []);

    const { loading, error, transactions } = fetchState;
  
    if (loading) {
      return <div>Loading...</div>
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    return (
      <>
        <h1>Expenses</h1>
        {transactions.length > 0 && <Table rows={transactions} />}
      </>

    )
  
}

export default Transactions;