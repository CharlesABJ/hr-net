import React from "react";
import TitleAndDescription from "../../components/TitleAndDescription/TitleAndDescription";
import CardLink from "../../components/cards/CardLink/CardLink";
//import rows from "../../../public/datas/current-employees.json";

import { useGetEmployeesQuery } from "../../redux/employees/employeeApi";
import { useSelector } from "react-redux";

function Dashboard() {
  const { data: remoteEmployeesData = [] } = useGetEmployeesQuery();
  const localEmployeesData = useSelector(
    (state) => state.employees.employeesList
  );
  const rows = [...localEmployeesData, ...remoteEmployeesData];
  const totalEmployees = rows.length;
  return (
    <main className="Dashboard">
      <div className="container-zone">
        <TitleAndDescription bigTitle title=" Welcome to HR-Net">
          Streamline your HR operations with our comprehensive employee
          management system. Create, view, and manage employee records with
          ease.
        </TitleAndDescription>

        <div className="cards-zone">
          <CardLink
            link="/create-employee"
            icon="create-employee"
            title="Create New Employee"
          >
            Create comprehensive employee profiles with all necessary
            information
          </CardLink>
          <CardLink
            link="/view-employees"
            icon="view-employees"
            title="View Employees"
          >
            Browse and search through your employee database
          </CardLink>
          <CardLink icon="total-employees" title="Total Employees">
            <span className="counter">{totalEmployees}</span>
            Current employees in system
          </CardLink>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
