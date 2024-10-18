interface Transaction {
    id: number;
    date: string;
    amount: number;
    merchant: string;
    category: string; 
}
// deduplicate types

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
    const validNormalizedColumns = columns
        .map(column => column.toLowerCase())
        .filter(column => isValidHeading(column))
    
        return (
          <table>
          <thead>
            <tr>
              {validNormalizedColumns.map(column => (
                  <th 
                      id={`column-${column}`} 
                      key={`${column}`}
                  >
                      {columns.find(originalColumn => originalColumn.toLowerCase() === column)}
                  </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id}>
                {validNormalizedColumns.map(column => (
                  <td 
                      headers={`column-${column}`} 
                      key={`${row.id}-${column}`}>{row[column]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
    ) 
} 

export default Table;
