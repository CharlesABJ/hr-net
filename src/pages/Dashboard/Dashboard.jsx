import React from "react";
import TitleAndDescription from "../../components/TitleAndDescription/TitleAndDescription";
import CardLink from "../../components/cards/CardLink/CardLink";

function Dashboard() {
  const totalEmployees = 0;
  return (
    <main className="Dashboard">
      <div className="container-zone">
        <TitleAndDescription bigTitle title=" Welcome to HRnet">
          Streamline your HR operations with our comprehensive employee
          management system. Create, view, and manage employee records with
          ease.
        </TitleAndDescription>

        <div className="cards-zone">
          <CardLink link="/create-employee" icon="" title="Create New Employee">
            Create comprehensive employee profiles with all necessary
            information
          </CardLink>
          <CardLink link="/view-employees" icon="" title="View Employees">
            Browse and search through your employee database
          </CardLink>
          <CardLink icon="" title="Total Employees">
            <span className="counter">{totalEmployees}</span>
            Current employees in system
          </CardLink>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
