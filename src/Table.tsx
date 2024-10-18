type TableProps<T> = {
    columns: (keyof T)[];
    rows: T[]
}

// add Typeguard to check if react node

const Table = <T extends { id: string }>({ columns, rows }: TableProps<T>) => (
    <table>
    <thead>
      <tr>
        {columns.map(column => (
            <th 
                id={`${column.toString().toLowerCase()}`} 
                key={`${column.toString().toLowerCase()}`}
            >
                {column}
            </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {rows.map((row) => (
        <tr key={row.id}>
          {columns.map(column => (
                <td 
                    headers={column.toString().toLowerCase()}
                    key={`${row.id}-${column.toString().toLowerCase()}`}
                >
                    {row[column]}
                </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
) 

export default Table;
