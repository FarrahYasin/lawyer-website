import React from "react";
import "./Individuals.css";
import SearchcontI from "./searchcontI/SearchcontI";
import DelcontI from "./delcontI/DelcontI";
import EditContI from "./editContI/EditContI";

const Individuals: React.FC = () => {
  return (
    <div className="text-component-div-i">
      <h2 className="company-text-h2-i">سجل الأفراد</h2>
      <p className="copmany-text-p-i">
        تحوي هذه الصفحة قائمةً لجميع سجلات الموكلين
      </p>

      <div className="secSection-i">
        <SearchcontI />
        <DelcontI />
      </div>

      <div className="Edit-i">
        <EditContI />
        <EditContI />
        <EditContI />
        <EditContI />
        <EditContI />
        <EditContI />
        <EditContI />
        <EditContI />
        <EditContI />
        <EditContI />
        <EditContI />
        <EditContI />
        <EditContI />
        <EditContI />
        <EditContI />
        <EditContI />
        <EditContI />
        <EditContI />
      </div>
    </div>
  );
};
export default Individuals;
