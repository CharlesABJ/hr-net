import React from "react";

function Table({ columns, rows, sortConfig, handleSort, handleDetails }) {
  return (
    <table className="Table">
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.key} onClick={() => handleSort(column.key)}>
              <span
                className={
                  sortConfig.key === column.key && sortConfig.direction
                    ? sortConfig.direction + " label"
                    : "label"
                }
              >
                {column.label}
              </span>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.length === 0 ? (
          <tr>
            <td className="no-records" colSpan={columns.length}>
              There are no records to display
            </td>
          </tr>
        ) : (
          rows.map((row, rowIndex) => (
            <tr key={rowIndex} onClick={() => handleDetails(row)}>
              {columns.map((column) =>
                column.key === "state" ? (
                  <td title={row.state} key={column.key}>
                    {row.stateAbbr}
                  </td>
                ) : (
                  <td key={column.key}>{row[column.key]}</td>
                )
              )}
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}

export default Table;
