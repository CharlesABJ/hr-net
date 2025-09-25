import { useMemo } from "react";

function useSort(rows, sortConfig) {
  return useMemo(() => {
    // If no sort config, return all rows
    if (!sortConfig.key) return rows;

    return [...rows].sort((a, b) => {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];

      const aNum = Number(aValue);
      const bNum = Number(bValue);
      let comparison;

      if (!isNaN(aNum) && !isNaN(bNum)) {
        comparison = aNum - bNum;
      } else {
        comparison = aValue.localeCompare(bValue);
      }
      if (comparison < 0) return sortConfig.direction === "asc" ? -1 : 1;
      if (comparison > 0) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
  }, [rows, sortConfig]);
}

export default useSort;
