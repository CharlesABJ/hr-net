import { useMemo, useState } from "react";

function usePagination(rows, rowPerPage = 10) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = useMemo(() => {
    if (rowPerPage === "All") return 1;
    return Math.ceil(rows.length / rowPerPage);
  }, [rows.length, rowPerPage]);

  const paginatedRows = useMemo(() => {
    if (!rows) return [];
    if (rowPerPage === "All") {
      return rows;
    }

    const startIndex = (currentPage - 1) * rowPerPage;
    const endIndex = startIndex + rowPerPage;
    return rows.slice(startIndex, endIndex);
  }, [rows, rowPerPage, currentPage]);

  return { currentPage, setCurrentPage, totalPages, paginatedRows };
}

export default usePagination;
