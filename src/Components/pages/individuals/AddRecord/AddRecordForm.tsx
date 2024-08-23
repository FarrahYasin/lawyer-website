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
  profileImage: string;
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
    profileImage: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, profileImage: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };
  const handleButtonClick = () => {
    const fileInput = document.querySelector(
      'input[type="file"]'
    ) as HTMLInputElement;
    if (fileInput) {
      fileInput.click();
    }
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
        <h5 className="image-form">الصورة الشخصية</h5>
        <div className="form-info">
          <div className="image-upload-container">
            <label className="image-preview">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: "none" }}
              />
            </label>
            <div className="image-upload-button">
              <p className="p-img-profile">الأبعاد الموصى بها:
              (120 بكسل * 120 بكسل)</p>
              <button type="button" onClick={handleButtonClick}>
                تحميل
              </button>
            </div>
          </div>
        </div>

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
          <label className="label-form">
            اسم ووصف الموكل:
            <input
              className="input-form"
              type="text"
              name="name"
              placeholder="اسم ووصف الموكل"
              value={formData.name}
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
              <option value="ذكر">ذكر</option>
              <option value="انثى">أنثى</option>
            </select>
          </label>
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
            الجنسية:
            <select
              className="select-form"
              name="nationality"
              value={formData.nationality}
              onChange={handleChange}
            >
              <option value=""> الجنسية</option>
              <option value="أردني">أردني</option>
              <option value="إماراتي">إماراتي</option>
              <option value="سعودي">سعودي</option>
              <option value="سوري">سوري</option>
              <option value="مصري">مصري</option>
              <option value="لبناني">لبناني</option>
              <option value="عراقي">عراقي</option>
              <option value="مغربي">مغربي</option>
              <option value="أخرى">أخرى</option>
            </select>
          </label>
          <label className="label-form">
            الحالة الاجتماعية:
            <select
              className="input-form"
              name="maritalStatus"
              value={formData.maritalStatus}
              onChange={handleChange}
            >
              <option value="">الحالة الاجتماعية</option>
              <option value="أعزب">أعزب</option>
              <option value="متزوج">متزوج</option>
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
        </div>
        <h5 className="h-form">المعلومات المهنية:</h5>
        <div className="form-work">
          <label className="label-form">
            مسمى الوظيفة:
            <select
              className="input-form"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
            >
              <option value="مهندس" disabled>
                {" "}
              </option>
              <option value="مهندس"> مهندس</option>
              <option value="دكتور">دكتور </option>
              <option value="محامي"> محامي</option>
              <option value="مدرس"> مدرس</option>
            </select>
          </label>

          <label className="label-form">
            وصف المسمى:
            <select
              className="input-form"
              name="jobDescription"
              value={formData.jobDescription}
              onChange={handleChange}
            >
              <option value="مسمى افراد" disabled>
                {" "}
              </option>
              <option value="مسمى افراد">مسمى افراد </option>
              <option value="مسمى شركات">مسمى شركات </option>
            </select>
          </label>
        </div>
        <h5 className="h-form">معلومات الوثيقة</h5>
        <div className="form-ID">
          <label className="label-form">
            نوع الوثيقة:
            <select
              className="input-form"
              name="documentType"
              value={formData.documentType}
              onChange={handleChange}
            >
              <option value="">نوع الوثيقة</option>
              <option value="هوية">هوية</option>
              <option value="جواز سفر">جواز سفر</option>
            </select>
          </label>
          <label className="label-form">
            رقم الوثيقة:
            <input
              className="input-form"
              type="text"
              name="documentNumber"
              placeholder="رقم الوثيقة"
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
          <button className="close-form" onClick={() => navigate("/indiv")}>
            إلغاء
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecordForm;
