import type { Transaction } from '../types';
import './Table.css';

interface TableProps {
    rows: Transaction[]
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const time = date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
  const ddmmyyyy = date.toLocaleDateString('en-GB')
  return `${time} - ${ddmmyyyy}`
}

const Table = ({ rows }: TableProps) => {
        return (
          <table>
          <thead>
            <tr>
              <th id="column-id" key="column-id">ID</th>
              <th id="column-date" key="column-date">Date</th>
              <th id="column-amount" key="column-amount">Amount</th>
              <th id="column-merchant" key="column-merchant">Merchant</th>
              <th id="column-category" key="column-category">Category</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id}>
                <td headers="column-id" key={`${row.id}-id`}>{row.id}</td>
                <td headers="column-date" key={`${row.id}-date`}>{formatDate(row.date)}</td>
                <td headers="column-amount" key={`${row.id}-amount`}>{`£${row.amount}`}</td>
                <td headers="column-merchant" key={`${row.id}-merchant`}>{row.merchant}</td>
                <td headers="column-category" key={`${row.id}-category`}>{`${row.category.charAt(0).toUpperCase() + row.category.slice(1)}`}</td>
              </tr>
            ))}
          </tbody>
        </table>
    ) 
} 

export default Table;
