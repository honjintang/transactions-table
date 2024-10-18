import Transactions from "./components/Transactions";

function App() {
  // const [data, setData] = useState();
  // const [loading, setLoading] = useState(true)

  // const fetchTransactions = async () => {
  //   try {
  //     const response = await fetch('https://tip-transactions.vercel.app/api/transactions?page=1 ');
      
  //     if (!response.ok) {
  //       throw new Error('Error retrieving transactions')
  //     };
      
  //     const transactions = await response.json();
  //     setData(transactions);
  //   } catch (err) {
  //     // TODO: add error state
  //     console.error(err)
  //   } finally {
  //     setLoading(false)
  //   }
  // }

  // useEffect(() => {
  //   fetchTransactions()
  // }, []);

  // if (loading) {
  //   return <div>Loading...</div>
  // }

  return (
    <div id="template-text">
      <h1>Expenses</h1>
      <Transactions />
    </div>
  );
}

export default App;
