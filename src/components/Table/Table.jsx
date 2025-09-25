import React from "react";

function Table({ columns, rows, sortConfig, handleSort }) {
  return (
    <table className="Table">
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.label} onClick={() => handleSort(column.label)}>
              <span
                className={
                  sortConfig.key === column.label && sortConfig.direction
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
            <tr key={rowIndex}>
              {columns.map((column) =>
                column.label === "State" ? (
                  <td title={row.State} key={column.label}>
                    {row.stateAbbr}
                  </td>
                ) : (
                  <td key={column.label}>{row[column.label]}</td>
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
