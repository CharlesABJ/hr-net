import React from "react";
import TitleAndDescription from "@/components/TitleAndDescription/TitleAndDescription";
import { Link } from "react-router-dom";
import Table from "../../components/Table/Table";

import columns from "../../../public/datas/columns.json";
import rows from "../../../public/datas/current-employees.json";

function ViewEmployees() {
  return (
    <main className="ViewEmployees">
      <TitleAndDescription title="View Current Employees">
        Manage and view all employee records
      </TitleAndDescription>

      <Link className="empty-employees" to="/create-employee">
        <span className="title">No employees found</span>
        <span className="description">
          Start by adding your first employee to the system.
        </span>
      </Link>

      <div className="table-zone">
        <Table columns={columns} rows={rows} />
      </div>
    </main>
  );
}

export default ViewEmployees;
