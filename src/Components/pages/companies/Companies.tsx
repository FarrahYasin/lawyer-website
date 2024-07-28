import "./Companies.css";
import EditCont from "./editCont/EditCont";
import React from "react";
import SearchCont from "./searchcont/SearchCont";
import Delcont from "./delcont/Delcont";

const Companies: React.FC = () => {
  return (
    <div className="text-component-div">
      <h2 className="company-text-h2">سجل المنشآت</h2>
      <p className="copmany-text-p">
        تحوي هذه الصفحة قائمةً لجميع سجلات المنشآت
      </p>

      <div className="secSection">
        <SearchCont />
        <Delcont />
      </div>

      <div className="Edit">
        <EditCont />
        <EditCont />
        <EditCont />
        <EditCont />
        <EditCont />
        <EditCont />
        <EditCont />
        <EditCont />
        <EditCont />
        <EditCont />
        <EditCont />
      </div>
    </div>
  );
};

export default Companies;
