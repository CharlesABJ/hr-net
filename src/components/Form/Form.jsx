import React from "react";
import { useForm } from "react-hook-form";

import TextInput from "./inputs/TextInput/TextInput";
import DateInput from "./inputs/DateInput/DateInput";
import SelectInput from "./inputs/SelectInput/SelectInput";
import SubmitInput from "./inputs/SubmitInput/SubmitInput";

function Form({ title1, title2 }) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form className="Form" onSubmit={handleSubmit(onSubmit)}>
      <div className="zone">
        <div className="title first-title">{title1}</div>
        <div className="inputs-zone">
          <TextInput
            required
            label="First Name"
            name="firstname"
            placeholder="Enter first name"
          />
          <TextInput
            required
            label="Last Name"
            name="lastname"
            placeholder="Enter last name"
          />
          <DateInput required label="Date of Birth" name="birthdate" />
          <DateInput required label="StartDate" name="startdate" />
          <SelectInput
            required
            label="Department"
            name="department"
            placeholder="Department"
          />
        </div>
      </div>
      <div className="zone">
        {title2 && <div className="title">{title2}</div>}
        <div className="inputs-zone">
          <SelectInput
            required
            label="State"
            name="state"
            placeholder="State"
          />
          <SelectInput required label="City" name="city" placeholder="City" />
          <SelectInput
            required
            label="Zip Code"
            name="Zip Code"
            placeholder="Zip Code"
          />
          <TextInput
            required
            label="Street Address"
            name="streetaddress"
            placeholder="Enter street address"
          />
        </div>
      </div>

      <SubmitInput label="Create Employee" name="submit" />
    </form>
  );
}

export default Form;
