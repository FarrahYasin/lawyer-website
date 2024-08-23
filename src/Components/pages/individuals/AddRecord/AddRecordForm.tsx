import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import "./AddRecordForm.css";

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
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
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
    <div className="addFormContainer">
      <h4 className="h4-form">إضافة فرد جديد</h4>
      <p>املأ الحقول أدناه بكل معلومات الموكل</p>
      <form onSubmit={handleSubmit}> 
        
        <h5 className="h-form">المعلومات الشخصية</h5>
        <div className="form-info">
          <label className="label-form">
            اسم الموكل الرباعي:
            <input
              className="input-form"
              type="text"
              name="name"
              placeholder="اسم الموكل الرباعي"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          {/* <label className="label-form">
            اسم ووصف الموكل:
            <input
              className="input-form"
              type="text"
              name="name"
              placeholder="اسم ووصف الموكل"
              value={formData.name}
              onChange={handleChange}
            />
          </label> */}
          <label className="label-form">
            تاريخ الميلاد:
            <input
              className="input-form"
              type="date"
              name="birthdate"
              placeholder="تاريخ الميلاد"
              value={formData.birthdate}
              onChange={handleChange}
            />
          </label>
          <label className="label-form">
            الجنس:
            <select
              className="select-form"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">الجنس</option>
              <option value="Male">ذكر</option>
              <option value="Female">أنثى</option>
            </select>
          </label>
         
          
          <label className="label-form">
            الحالة الاجتماعية:
            <input
              className="input-form"
              type="text"
              name="maritalStatus"
              placeholder="الحالة الاجتماعية"
              value={formData.maritalStatus}
              onChange={handleChange}
            />
          </label>
          <label className="label-form">
            الجنسية:
            <select
              className="select-form"
              name="nationality"
              value={formData.nationality}
              onChange={handleChange}
            >
              <option value=""> الجنسية</option>
              <option value="Jordanian">أردني</option>
              <option value="Emirati">إماراتي</option>
              <option value="Saudi Arabian">سعودي</option>
              <option value="Syrian">سوري</option>
              <option value="Egyptian">مصري</option>
              <option value="Lebanese">لبناني</option>
              <option value="Iraqi">عراقي</option>
              <option value="Moroccan">مغربي</option>
              <option value="Other">أخرى</option>
            </select>
          </label>
          <label className="label-form">
            اسم الأم:
            <input
              className="input-form"
              type="text"
              name="motherName"
              placeholder="اسم الأم"
              value={formData.motherName}
              onChange={handleChange}
            />
          </label>
        </div>
        <h5 className="h-form">معلومات التواصل</h5>
        <div className="form-contact">
          <label className="label-form">
            العنوان:
            <input
              className="input-form"
              type="text"
              name="address"
              placeholder="العنوان"
              value={formData.address}
              onChange={handleChange}
            />
          </label>
          <label className="label-form">
            البريد الالكتروني:
            <input
              className="input-form"
              type="email"
              name="email"
              placeholder="البريد الالكتروني"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <label className="label-form">
            رقم الهاتف:
            <input
              className="input-form"
              type="tel"
              name="phoneNumber"
              placeholder="رقم الهاتف"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </label>
          <label className="label-form">
            رقم الفاكس:
            <input
              className="input-form"
              type="text"
              name="faxNumber"
              placeholder="رقم الفاكس"
              value={formData.faxNumber}
              onChange={handleChange}
            />
          </label>
          <label className="label-form">
            رقم الهاتف الارضي:
            <input
              className="input-form"
              type="text"
              name="landlineNumber"
              placeholder="رقم الهاتف الارضي"
              value={formData.landlineNumber}
              onChange={handleChange}
            />
          </label>
        </div>
        <h5 className="h-form">المعلومات المهنية:</h5>
        <div className="form-work">
          <label className="label-form">
            مسمى الوظيفة:
            <input
              className="input-form"
              type="text"
              name="jobTitle"
              placeholder="مسمى الوظيفة"
              value={formData.jobTitle}
              onChange={handleChange}
            />
          </label>
          <label className="label-form">
            وصف المسمى:
            <input
              className="input-form"
              type="text"
              name="jobDescription"
              placeholder="وصف المسمى"
              value={formData.jobDescription}
              onChange={handleChange}
            />
          </label>
        </div>
        <h5 className="h-form">معلومات الوثيقة</h5>
        <div className="form-ID">
          <label className="label-form">
            نوع الوثيقة:
            <input
              className="input-form"
              type="text"
              name="documentType"
              placeholder="نوع الوثيقة"
              value={formData.documentType}
              onChange={handleChange}
            />
          </label>
          <label className="label-form">
            نوع الوثيقة:
            <input
              className="input-form"
              type="text"
              name="documentNumber"
              placeholder="نوع الوثيقة"
              value={formData.documentNumber}
              onChange={handleChange}
            />
          </label>
          <label className="label-form">
            الرقم الوطني:
            <input
              className="input-form"
              type="text"
              name="nationalId"
              placeholder="الرقم الوطني"
              value={formData.nationalId}
              onChange={handleChange}
            />
          </label>
        </div>

        <h5 className="h-form">ملاحظات أخرى</h5>
        <div className="form-notes">
          <label className="label-form">
            ملاحظات:
            <textarea
              className="txt-area-form"
              name="notes"
              placeholder="اكتب أي ملاحظات هنا..."
              value={formData.notes}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-btns">
          <button className="save-form" type="submit">
            حفظ
          </button>
          <button
            className="close-form"
            onClick={() => navigate("/indiv")}
          >
            إلغاء
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecordForm;
