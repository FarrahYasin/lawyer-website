import React from "react";
import "./Delcont.css";

const Delcont: React.FC = () => {
  return (
    <div className="del-show-cont">
      <div className="delete-cont">
        <select className="del-select">
          <option className="option-del" value="record1">
            حذف السجلات المحددة
          </option>
          <option className="option-del" value="record2">
            شركةالفوسفات الاردنية 1
          </option>
          <option className="option-del" value="record3">
            شركةالفوسفات الاردنية 2
          </option>
          <option className="option-del" value="record4">
            شركةالفوسفات الاردنية 3
          </option>
        </select>

        <button className="btn-done">تطبيق</button>
      </div>

      <div className="show-cont">
        <select className="show-select">
          <option className="option-show" value="o1">
            عرض بحسب الابجدية
          </option>
          <option className="option-show-" value="alphabetical">
            أبجديا
          </option>
          <option className="option-show-" value="recent">
            الأحدث
          </option>
          <option className="option-show-" value="oldest">
            الأقدم
          </option>
        </select>
      </div>
    </div>
  );
};
export default Delcont;
