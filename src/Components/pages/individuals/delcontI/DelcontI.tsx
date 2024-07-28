import React from "react";
import "./DelcontI.css";

const DelcontI: React.FC = () => {
  return (
    <div className="del-show-cont-i">
      <div className="delete-cont-i">
        <select className="del-select-i">
          <option className="option-del-i" value="record1">
            حذف السجلات المحددة
          </option>
          <option className="option-del-i" value="record2">
            محمد علي كامل سليمان
          </option>
          <option className="option-del-i" value="record3">
            محمد علي كامل سليمان
          </option>
          <option className="option-del-i" value="record4">
            محمد علي كامل سليمان
          </option>
        </select>

        <button className="btn-done-i">تطبيق</button>
      </div>

      <div className="show-cont-i">
        <select className="show-select-i">
          <option className="option-show-i" value="o1">
            عرض بحسب الابجدية
          </option>
          <option className="option-show-i" value="alphabetical">
            أبجديا
          </option>
          <option className="option-show-i" value="recent">
            الأحدث
          </option>
          <option className="option-show-i" value="oldest">
            الأقدم
          </option>
        </select>
      </div>
    </div>
  );
};
export default DelcontI;
