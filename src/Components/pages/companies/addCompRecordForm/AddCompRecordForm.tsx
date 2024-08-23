import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import "./AddCompRecordForm.css";

interface Company {
  id: string;
  name: string;
  titleDescription: string;
  address: string;
  facility_registration_number: string;
  phoneNumber: string;
  landlineNumber: string;
  faxNumber: string;
  sequence: string;
  commerciaL_register_sequence: string;
  Issuance_of_commercial_register: string;
  commercial_register_date: string;
  delegation_facts: string;
  facility_registration_status: string;
  nationality: string;
  facility_type: string;
  record_number: string;
  Commissioner_name: string;
  Commissioner_phone: string;
  job_title: string;
  city: string;
  neighborhood: string;
  email: string;
  notes: string;
}

const AddCompRecordForm: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<Omit<Company, "id">>({
    name: " ",
    titleDescription: " ",
    address: " ",
    facility_registration_number: " ",
    phoneNumber: " ",
    landlineNumber: " ",
    faxNumber: " ",
    sequence: " ",
    commerciaL_register_sequence: " ",
    Issuance_of_commercial_register: " ",
    commercial_register_date: " ",
    delegation_facts: " ",
    facility_registration_status: " ",
    nationality: " ",
    facility_type: " ",
    record_number: " ",
    Commissioner_name: " ",
    Commissioner_phone: " ",
    job_title: " ",
    city: " ",
    neighborhood: " ",
    email: " ",
    notes: " ",
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
    const newRecord: Company = { id: uuidv4(), ...formData }; // Assign the unique ID

    const existingData = localStorage.getItem("companiesData");
    const updatedData = existingData ? JSON.parse(existingData) : [];

    updatedData.push(newRecord);
    localStorage.setItem("companiesData", JSON.stringify(updatedData));

    console.log("Saved Data:", updatedData);
    navigate("/companies");
  };

  return (
    <div className="addFormContainer">
      <h4 className="h4-form">إضافة منشأة جديدة</h4>
      <p>املأ الحقول أدناه بكل معلومات المنشأة</p>
      <form onSubmit={handleSubmit}>
        <h5 className="h-form">معلومات المنشأة</h5>
        <div className="form-info">
          <label className="label-form">
            اسم المنشأة:
            <input
              className="input-form"
              type="text"
              name="name"
              placeholder="اسم المنشأة"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <label className="label-form">
            اسم العلامة التجارية:
            <input
              className="input-form"
              type="text"
              name="name"
              placeholder="اسم العلامة التجارية"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <label className="label-form">
            وصف المسمى:
            <select
              className="input-form"
              name="titleDescription"
              value={formData.titleDescription}
              onChange={handleChange}
            >
              <option value="" disabled></option>
              <option value="مسمى مؤسسات"> مسمى مؤسسات</option>
              <option value="description2">مسمى شركات </option>
              <option value="description3">الوصف الثالث</option>
            </select>
          </label>

          <label className="label-form">
            نوع المنشأة:
            <select
              className="select-form"
              name="facility_type"
              value={formData.facility_type}
              onChange={handleChange}
            >
              <option value=""> نوع المنشأة</option>
              <option value="حكومية">حكومية</option>
              <option value="خاصة">خاصة</option>
            </select>
          </label>

          <label className="label-form">
            جنسية المنشأة:
            <select
              className="select-form"
              name="nationality"
              value={formData.nationality}
              onChange={handleChange}
            >
              <option value=""> جنسية المنشأة</option>
              <option value="الاردنية">الاردنية</option>
              <option value="الاماراتية">الاماراتية</option>
              <option value="السعودية">السعودية</option>
              <option value="السورية">السورية</option>
              <option value="المصرية">المصرية</option>
              <option value="اللبنانية">اللبنانية</option>
              <option value="العراقية">العراقية</option>
              <option value="المغربية">المغربية</option>
              <option value="اخرى">أخرى</option>
            </select>
          </label>
          <label className="label-form">
            رقم تسجيل المنشأة:
            <input
              className="input-form"
              type="text"
              name="facility_registration_number"
              placeholder="رقم تسجيل المنشأة"
              value={formData.facility_registration_number}
              onChange={handleChange}
            />
          </label>
          <label className="label-form">
            صفة تسجيل المنشأة:
            <select
              className="input-form"
              name="facility_registration_status"
              value={formData.facility_registration_status}
              onChange={handleChange}
            >
              <option value="" disabled></option>
              <option value="status1"> شركة ذات مسؤولية محدودة</option>
              <option value="status2">شركة ذات مسؤولية عالية </option>
              <option value="status3">شركة ذات مسؤولية متوسطة</option>
            </select>
          </label>

          <label className="label-form">
            رقم السجل التجاري:
            <input
              className="input-form"
              type="text"
              name="record_number"
              placeholder="رقم السجل التجاري"
              value={formData.record_number}
              onChange={handleChange}
            />
          </label>
        </div>
        <h5 className="h-form">معلومات التواصل</h5>
        <div className="form-contact">
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
            البريد الالكتروني:
            <input
              className="input-form"
              type="email"
              name="email"
              placeholder="رقم الهاتف"
              value={formData.email}
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

          <label className="label-form">
            الحي:
            <select
              className="input-form"
              name="neighborhood"
              value={formData.neighborhood}
              onChange={handleChange}
            >
              <option value="" disabled></option>
              <option value="الحي الاول">الحي الأول</option>
              <option value="الحي الثاني">الحي الثاني</option>
              <option value="الحي الثالث">الحي الثالث</option>
            </select>
          </label>

          <label className="label-form">
            المدينة:
            <select
              className="input-form"
              name="city"
              value={formData.city}
              onChange={handleChange}
            >
              <option value="" disabled></option>
              <option value="عمان">عمان</option>
              <option value="الزرقاء">الزرقاء</option>
              <option value="اربد">اربد</option>
            </select>
          </label>

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
        </div>
        {/* <h5 className="h-form">معلومات السجل التجاري:</h5>
        <div className="form-work">
          <label className="label-form">
            التسلسل:
            <input
              className="input-form"
              type="text"
              name="sequence"
              placeholder="مسمى الوظيفة"
              value={formData.sequence}
              onChange={handleChange}
            />
          </label>
          <label className="label-form">
            تسلسل السجل التجاري:
            <input
              className="input-form"
              type="text"
              name="commerciaL_register_sequence"
              placeholder="تسلسل السجل التجاري"
              value={formData.commerciaL_register_sequence}
              onChange={handleChange}
            />
          </label>
          <label className="label-form">
            إصدار السجل التجاري:
            <input
              className="input-form"
              type="text"
              name="Issuance_of_commercial_register"
              placeholder="إصدار السجل التجاري"
              value={formData.Issuance_of_commercial_register}
              onChange={handleChange}
            />
          </label>
          <label className="label-form">
            تاريخ السجل التجاري:
            <input
              className="input-form"
              type="date"
              name="commercial_register_date"
              placeholder="تاريخ السجل التجاري"
              value={formData.commercial_register_date}
              onChange={handleChange}
            />
          </label>

          <label className="label-form">
            وقائع التفويض:
            <input
              className="input-form"
              type="text"
              name="delegation_facts"
              placeholder="وقائع التفويض"
              value={formData.delegation_facts}
              onChange={handleChange}
            />
          </label>
        </div>
        <h5 className="h-form">معلومات المفوضون بالتوقيع </h5>
        <div className="form-ID">
          <label className="label-form">
            اسم المفوض :
            <input
              type="text"
              className="input-form"
              name="Commissioner_name"
              value={formData.Commissioner_name}
              onChange={handleChange}
            />
          </label>
          <label className="label-form">
            المسمى الوظيفي :
            <select
              className="input-form"
              name="job_title"
              value={formData.job_title}
              onChange={handleChange}
            >
              <option value=""  disabled></option>
              <option value="مهندس">مهندس</option>
              <option value="دكتور">دكتور</option>
              <option value="محامي">محامي</option>
              <option value="مدرس">مدرس</option>
            </select>
          </label>

          <label className="label-form">
            رقم هاتف المفوض:
            <input
              className="input-form"
              type="phone"
              name="Commissioner_phone"
              placeholder="رقم هاتف المفوض"
              value={formData.Commissioner_phone}
              onChange={handleChange}
            />
          </label>
          <label className="label-form">
            تسلسل السجل التجاري:
            <input
              className="input-form"
              type="text"
              name="commerciaL_register_sequence"
              placeholder="تسلسل السجل التجاري"
              value={formData.commerciaL_register_sequence}
              onChange={handleChange}
            />
          </label>
          <label className="label-form">
            اصدار السجل التجاري:
            <input
              className="input-form"
              type="text"
              name="Issuance_of_commercial_register"
              placeholder="اصدار السجل التجاري"
              value={formData.Issuance_of_commercial_register}
              onChange={handleChange}
            />
          </label>
        </div> */}

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
          <button className="close-form" onClick={() => navigate("/companies")}>
            إلغاء
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCompRecordForm;
