import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TitleAndDescription from "@/components/TitleAndDescription/TitleAndDescription";
import { Link } from "react-router-dom";
import Table from "../../components/Table/Table";

import columns from "@/datas/columns.json";

//import rows from "../../../public/datas/current-employees.json";
import SearchInput from "../../components/SearchInput/SearchInput";
import useSearch from "../../hooks/useSearch";
import useSort from "../../hooks/useSort";
import usePagination from "../../hooks/usePagination";
import Pagination from "../../components/Pagination/Pagination";
import { useGetEmployeesQuery } from "../../redux/employees/employeeApi";
import { useSelector } from "react-redux";

function ViewEmployees() {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "" });
  const [searchValue, setSearchValue] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const navigate = useNavigate();

  // We get the employees list from the store

  const { data: remoteEmployeesData = [] } = useGetEmployeesQuery();
  const localEmployeesData = useSelector(
    (state) => state.employees.employeesList
  );
  const rows = [...localEmployeesData, ...remoteEmployeesData];

  // SORT - FILTER - PAGINATION
  // Sort logic
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

  // Search
  const searchedRows = useSearch(rows, searchValue);

  // 2) Sort
  const sortedRows = useSort(searchedRows, sortConfig);

  // 3) Pagination
  const { currentPage, setCurrentPage, totalPages, paginatedRows } =
    usePagination(sortedRows, rowsPerPage);

  // REDIRECT TO EMPLOYEE DETAILS
  const handleDetails = (row) => {
    navigate(`/view-employees/employees/${row.employeeId}`);
  };
  return (
    <main className="ViewEmployees">
      <TitleAndDescription title="View Current Employees">
        Manage and view all employee records
      </TitleAndDescription>

      {rows.length === 0 ? (
        <Link className="empty-employees" to="/create-employee">
          <span className="title">No employees found</span>
          <span className="description">
            Start by adding your first employee to the system.
          </span>
        </Link>
      ) : (
        <>
          <div className="filters-zone">
            <SearchInput
              placeholder="Search"
              name="search"
              value={searchValue}
              onChange={setSearchValue}
            />
          </div>

          <div className="table-zone">
            <Table
              columns={columns}
              rows={paginatedRows}
              sortConfig={sortConfig}
              handleDetails={handleDetails}
              handleSort={handleSort}
            />
          </div>

          <Pagination
            searchedRows={searchedRows}
            rowsPerPage={rowsPerPage}
            setRowsPerPage={setRowsPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            totalPages={totalPages}
          />
        </>
      )}
    </main>
  );
}

export default ViewEmployees;
