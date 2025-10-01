import { useParams } from "react-router-dom";
// import rows from "../../../public/datas/current-employees.json";
import { useGetEmployeesQuery } from "../../redux/employees/employeeApi";
import { useSelector } from "react-redux";

function EmployeeDetail() {
  const { id } = useParams();
  const { data: employeesData = [] } = useGetEmployeesQuery();

  const employeesList = useSelector((state) => state.employees.employeesList);
  const rows = [...employeesList, ...employeesData];

  const employee = rows.find((employee) => employee.employeeId === Number(id));

  return (
    <main className="EmployeeDetails">
      <div className="content">
        {!employee ? (
          <p>No employee selected</p>
        ) : (
          <>
            <h1>Employee details</h1>
            <p className="last-name">
              <strong>Last Name :</strong> <span>{employee.lastName}</span>
            </p>
            <p>
              <strong>First Name :</strong> <span>{employee.firstName}</span>
            </p>
            <p>
              <strong>Birth Date :</strong> <span>{employee.dateOfBirth}</span>
            </p>
            <br />
            <p>
              <strong>State :</strong> <span>{employee.state}</span>
            </p>
            <p>
              <strong>City :</strong> <span>{employee.city}</span>
            </p>
            <p>
              <strong>Zip Code :</strong> <span>{employee.zipCode}</span>
            </p>
            <p>
              <strong>Street :</strong> <span>{employee.street}</span>
            </p>
            <br />
            <p>
              <strong>Department :</strong> <span>{employee.department}</span>
            </p>
            <p>
              <strong>Start Date :</strong> <span>{employee.startDate}</span>
            </p>
          </>
        )}
      </div>
    </main>
  );
}

export default EmployeeDetail;
