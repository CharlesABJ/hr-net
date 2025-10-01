import React from "react";
import { useForm } from "react-hook-form";

import Departments from "../../../public/datas/departments.json";
import States from "../../../public/datas/states.json";
import CaliforniaCities from "../../../public/datas/California/cities.json";
import LosAngelesZips from "../../../public/datas/California/LosAngeles/zips.json";
import Addresses90001 from "../../../public/datas/California/LosAngeles/90001/addresses.json";

import TextInput from "./inputs/TextInput/TextInput";
import DateInput from "./inputs/DateInput/DateInput";
import SelectInput from "./inputs/SelectInput/SelectInput";
import SubmitInput from "./inputs/SubmitInput/SubmitInput";
import { useDispatch } from "react-redux";
import { addEmployee } from "../../redux/employees/employeesSlice";

function Form({ title1, title2, onEmployeeCreated }) {
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
    clearErrors,
    reset,
    watch,
  } = useForm();
  const dispatch = useDispatch();
  const onSubmit = (dataEmployee) => {
    const selectedState = States.find(
      (state) => state.state === dataEmployee.state
    );

    const employee = {
      ...dataEmployee,
      stateAbbr: selectedState?.stateAbbr || "",
      employeeId: Date.now(),
    };

    dispatch(addEmployee(employee));
    console.log(employee);

    reset();
    onEmployeeCreated(employee);
  };

  const departmentOptions = Departments.map(
    (department) => department.department
  );
  const stateOptions = States.map((state) => state.state);
  const cityOptions = CaliforniaCities.map((city) => city.city);
  const zipOptions = LosAngelesZips.map((zip) => zip.zip);
  const addressOptions = Addresses90001.map((address) => {
    return `${address.numero} ${address.rue}`;
  });
  return (
    <form className="Form" onSubmit={handleSubmit(onSubmit)}>
      <div className="zone">
        <div className="title first-title">{title1}</div>
        <div className="inputs-zone">
          <TextInput
            required
            label="First Name"
            name="firstName"
            placeholder="Enter first name"
            error={errors.firstName}
            register={register}
          />
          <TextInput
            required
            label="Last Name"
            name="lastName"
            placeholder="Enter last name"
            error={errors.lastName}
            register={register}
          />
          <DateInput
            required
            label="Date of Birth"
            name="dateOfBirth"
            error={errors.dateOfBirth}
            register={register}
          />
          <DateInput
            required
            label="Start Date"
            name="startDate"
            error={errors.startDate}
            register={register}
          />
          <SelectInput
            required
            label="Department"
            name="department"
            placeholder="Department"
            options={[...departmentOptions]}
            setValue={setValue}
            error={errors.department}
            watch={watch}
            clearErrors={clearErrors}
            register={register}
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
            options={[...stateOptions]}
            setValue={setValue}
            error={errors.state}
            watch={watch}
            clearErrors={clearErrors}
            register={register}
          />
          <SelectInput
            required
            label="City"
            name="city"
            placeholder="City"
            options={[...cityOptions]}
            setValue={setValue}
            error={errors.city}
            watch={watch}
            clearErrors={clearErrors}
            register={register}
          />
          <SelectInput
            required
            label="Zip Code"
            name="zipCode"
            placeholder="Zip Code"
            options={[...zipOptions]}
            setValue={setValue}
            error={errors.zipCode}
            watch={watch}
            clearErrors={clearErrors}
            register={register}
          />
          <SelectInput
            required
            label="Street"
            name="street"
            placeholder="Street"
            options={[...addressOptions]}
            setValue={setValue}
            error={errors.street}
            watch={watch}
            clearErrors={clearErrors}
            register={register}
          />
          {/* <TextInput
            required
            label="Street Address"
            name="street"
            placeholder="Enter street address"
            error={errors.street}
            register={register}
          /> */}
        </div>
      </div>

      <SubmitInput label="Create Employee" name="submit" />
    </form>
  );
}

export default Form;
