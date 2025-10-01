import React, { useState } from "react";
import TitleAndDescription from "@/components/TitleAndDescription/TitleAndDescription";
import Form from "@/components/Form/Form";
import Modal from "../../components/Modal/Modal";

function CreateEmployee() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [createdEmployee, setCreatedEmployee] = useState(null);
  const handleEmployeeCreated = (employee) => {
    setCreatedEmployee(employee);
    setIsModalOpen(true);
  };

  return (
    <>
      <main className="CreateEmployee">
        <TitleAndDescription title="Create New Employee">
          Fill out the form below to create a new employee record
        </TitleAndDescription>
        <Form
          title1="Employee Information"
          title2="Address Information"
          onEmployeeCreated={handleEmployeeCreated}
        />
      </main>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2>Employee created successfully!</h2>

        <p className="center">
          The new employee{" "}
          {createdEmployee && (
            <>
              " {createdEmployee.firstName}{" "}
              <span className="uppercase">{createdEmployee.lastName}</span> "{" "}
              <br />{" "}
            </>
          )}
          has been added to the system.
        </p>
      </Modal>
    </>
  );
}

export default CreateEmployee;
