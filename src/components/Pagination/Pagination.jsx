import React from "react";

function Pagination({
  searchedRows,
  rowsPerPage,
  setRowsPerPage,
  setCurrentPage,
  currentPage,
  totalPages,
}) {
  const numericOptions = [10, 20, 30, 40, 50];
  // We keep only the numeric options that are valid
  const options = numericOptions.filter(
    (option) => option <= searchedRows.length
  );

  // We add "All" if there are more than 10 results
  if (searchedRows.length > 10) {
    options.push("All");
  }

  // Aucun résultat => pas de pagination
  if (searchedRows.length === 0) {
    return null;
  }

  return (
    <div className="Pagination">
      {searchedRows.length > 9 && (
        <>
          <span>Rows per page :</span>
          <select
            className="select"
            value={rowsPerPage}
            onChange={(e) => {
              const value =
                e.target.value === "All" ? "All" : Number(e.target.value);
              setRowsPerPage(value);
              setCurrentPage(1); // We reset the page to 1 when we change the number of rows per page
            }}
          >
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </>
      )}

      {rowsPerPage !== "All" && (
        <div className="pages">
          <button
            className="prev"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((page) => page - 1)}
          >
            Prev
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            className="next"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((page) => page + 1)}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default Pagination;
