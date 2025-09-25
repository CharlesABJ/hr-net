import { useMemo } from "react";

function useSearch(rows, searchValue) {
  return useMemo(() => {
    // If have not search value, return all rows
    if (!searchValue) return rows;

    return rows.filter((row) => {
      return Object.values(row).some((value) => {
        return String(value).toLowerCase().includes(searchValue.toLowerCase());
      });
    });
  }, [rows, searchValue]);
}

export default useSearch;
