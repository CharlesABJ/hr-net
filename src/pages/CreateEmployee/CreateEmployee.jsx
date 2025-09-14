import React from "react";
import TitleAndDescription from "@/components/TitleAndDescription/TitleAndDescription";
import Form from "@/components/Form/Form";

function CreateEmployee() {
  return (
    <main className="CreateEmployee">
      <TitleAndDescription title="Create New Employee">
        Fill out the form below to create a new employee record
      </TitleAndDescription>
      <Form title1="Employee Information" title2="Address Information" />
    </main>
  );
}

export default CreateEmployee;
