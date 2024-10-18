import { useEffect, useState } from 'react';
import Table from './Table';

interface Transaction {
    id: number;
    date: string;
    amount: number;
    merchant: string;
    category: string; 
}

const Transactions = () => {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [loading, setLoading] = useState(true)
  
    const fetchTransactions = async () => {
      try {
        const response = await fetch('https://tip-transactions.vercel.app/api/transactions?page=1 ');
        
        if (!response.ok) {
          throw new Error('Error retrieving transactions')
        }
        
        const result = await response.json();
        setTransactions(result.transactions);
      } catch (err) {
        // TODO: add error state
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
  
    useEffect(() => {
      fetchTransactions()
    }, []);
  
    if (loading) {
      return <div>Loading...</div>
    }

    return (
        <Table 
            columns={['ID', 'Date', 'Amount', 'Merchant', 'Category']} 
            rows={transactions} 
        />
    )
  
}

export default Transactions;