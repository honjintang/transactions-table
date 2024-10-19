import type { Transaction } from './types';

interface TableProps {
    columns: string[];
    rows: Transaction[]
}

const validHeadings = ['id', 'date', 'amount', 'merchant', 'category'] as const;
type ValidHeading = typeof validHeadings[number] 

const isValidHeading = (heading: string): heading is ValidHeading => {
    return validHeadings.includes(heading.toLowerCase() as ValidHeading)
}

const Table = ({ columns, rows }: TableProps) => {
    const normalizedColumns = columns
        .map(column => column.toLowerCase())
        .filter(column => isValidHeading(column))
    
        return (
          <table>
          <thead>
            <tr>
              {normalizedColumns.map(normalizedColumn => (
                  <th 
                      id={`column-${normalizedColumn}`} 
                      key={`${normalizedColumn}`}
                  >
                      {columns.find(originalColumn => originalColumn.toLowerCase() === normalizedColumn)}
                  </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id}>
                {normalizedColumns.map(normalizedColumn => (
                  <td 
                      headers={`column-${normalizedColumn}`} 
                      key={`${row.id}-${normalizedColumn}`}>{row[normalizedColumn]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
    ) 
} 

export default Table;
