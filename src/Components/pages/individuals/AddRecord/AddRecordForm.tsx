import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import "./AddRecordForm.css"

interface Individual {
  id: string;
  name: string;
  gender: string;
  birthdate: string;
  nationality: string;
  maritalStatus: string;
  motherName: string;
  address: string;
  email: string;
  phoneNumber: string;
  faxNumber: string;
  landlineNumber: string;
  jobTitle: string;
  jobDescription: string;
  documentType: string;
  documentNumber: string;
  nationalId: string;
  notes: string;
}

const AddRecordForm: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<Omit<Individual, "id">>({
    name: "",
    gender: "",
    birthdate: "",
    nationality: "",
    maritalStatus: "",
    motherName: "",
    address: "",
    email: "",
    phoneNumber: "",
    faxNumber: "",
    landlineNumber: "",
    jobTitle: "",
    jobDescription: "",
    documentType: "",
    documentNumber: "",
    nationalId: "",
    notes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newRecord: Individual = { id: uuidv4(), ...formData }; // Assign the unique ID

    const existingData = localStorage.getItem("individualsData");
    const updatedData = existingData ? JSON.parse(existingData) : [];

    updatedData.push(newRecord);
    localStorage.setItem("individualsData", JSON.stringify(updatedData));

    console.log("Saved Data:", updatedData);
    navigate("/indiv");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="gender"
        placeholder="Gender"
        value={formData.gender}
        onChange={handleChange}
      />
      <input
        type="date"
        name="birthdate"
        placeholder="Birthdate"
        value={formData.birthdate}
        onChange={handleChange}
      />
      <input
        type="text"
        name="nationality"
        placeholder="Nationality"
        value={formData.nationality}
        onChange={handleChange}
      />
      <input
        type="text"
        name="maritalStatus"
        placeholder="Marital Status"
        value={formData.maritalStatus}
        onChange={handleChange}
      />
      <input
        type="text"
        name="motherName"
        placeholder="Mother's Name"
        value={formData.motherName}
        onChange={handleChange}
      />
      <input
        type="text"
        name="address"
        placeholder="Address"
        value={formData.address}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="tel"
        name="phoneNumber"
        placeholder="Phone Number"
        value={formData.phoneNumber}
        onChange={handleChange}
      />
      <input
        type="text"
        name="faxNumber"
        placeholder="Fax Number"
        value={formData.faxNumber}
        onChange={handleChange}
      />
      <input
        type="text"
        name="landlineNumber"
        placeholder="Landline Number"
        value={formData.landlineNumber}
        onChange={handleChange}
      />
      <input
        type="text"
        name="jobTitle"
        placeholder="Job Title"
        value={formData.jobTitle}
        onChange={handleChange}
      />
      <textarea
        name="jobDescription"
        placeholder="Job Description"
        value={formData.jobDescription}
        onChange={handleChange}
      />
      <input
        type="text"
        name="documentType"
        placeholder="Document Type"
        value={formData.documentType}
        onChange={handleChange}
      />
      <input
        type="text"
        name="documentNumber"
        placeholder="Document Number"
        value={formData.documentNumber}
        onChange={handleChange}
      />
      <input
        type="text"
        name="nationalId"
        placeholder="National ID"
        value={formData.nationalId}
        onChange={handleChange}
      />
      <textarea
        name="notes"
        placeholder="Notes"
        value={formData.notes}
        onChange={handleChange}
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default AddRecordForm;
