import React, { useMemo, useState } from "react";

function Table({ columns, rows }) {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "" });

  // We manage the sorting of the table
  const handleSort = (columnLabel) => {
    let direction = "asc";
    if (sortConfig.key === columnLabel) {
      if (sortConfig.direction === "asc") {
        direction = "desc";
      } else if (sortConfig.direction === "desc") {
        direction = "";
      } else {
        direction = "asc";
      }
    }

    setSortConfig({
      key: direction === "" ? null : columnLabel,
      direction: direction,
    });
  };

  // We do the sort
  const sortedRows = useMemo(() => {
    if (!sortConfig.key) return rows;

    return [...rows].sort((a, b) => {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];

      if (aValue.localeCompare(bValue) === -1)
        return sortConfig.direction === "asc" ? -1 : 1;
      if (aValue.localeCompare(bValue) === 1)
        return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
  }, [rows, sortConfig]);

  return (
    <table className="Table">
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.label} onClick={() => handleSort(column.label)}>
              <span
                className={
                  sortConfig.key === column.label && sortConfig.direction
                    ? sortConfig.direction + " " + "label"
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
        {sortedRows.length === 0 ? (
          <tr>
            <td className="no-records" colSpan={columns.length}>
              There are no records to display
            </td>
          </tr>
        ) : (
          sortedRows.map((row, rowIndex) => (
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
