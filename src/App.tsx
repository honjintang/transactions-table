import { useEffect, useState } from 'react';

// notes - add TS typings

function App() {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(true)

  const fetchTransactions = async () => {
    try {
      const response = await fetch('https://tip-transactions.vercel.app/api/transactions?page=1 ');
      
      if (!response.ok) {
        throw new Error('Error retrieving transactions')
      };
      
      const transactions = await response.json();
      setData(transactions);
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

    <div id="template-text">
      <h1>Expenses</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Merchant</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {data.transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction.date}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.merchant}</td>
              <td>{transaction.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
